const btn = document.getElementById('myBtn');
const navContainer = document.querySelector('nav');

btn.addEventListener('click', async () => {
    console.log('Button was clicked!');
    
    // Add loading state
    const originalText = btn.textContent;
    btn.textContent = 'Loading...';
    btn.disabled = true;
    
    try {
        const response = await fetch("/test");
        
        // Check response status
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
            throw new Error(errorData.message || `Server error: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Validate data structure before using it
        if (!data?.data?.results?.[0]) {
            throw new Error('No character data found - Marvel API returned empty results');
        }
        
        console.log("✅ Data received from server:", data);
        
        const entityNavigation = new CharacterEntityNavigation(data);
        entityNavigation.setNavigation(navContainer);
        
        // Success feedback
        btn.textContent = '✅ Character Loaded!';
        setTimeout(() => {
            btn.textContent = originalText;
            btn.disabled = false;
        }, 2000);
        
    } catch (err) {
        console.error('❌ Error:', err);
        
        // Show error to user
        navContainer.innerHTML = `
            <div style="color: #ff4444; padding: 20px; background: #ffe6e6; border-radius: 8px; text-align: center;">
                <h3 style="margin-top: 0;">❌ Error Loading Character</h3>
                <p style="margin: 10px 0;">${err.message}</p>
                <button onclick="location.reload()" style="padding: 10px 20px; cursor: pointer; background: #ff4444; color: white; border: none; border-radius: 4px; font-size: 14px;">
                    🔄 Try Again
                </button>
            </div>
        `;
        
        btn.textContent = '❌ Error - Try Again';
        btn.disabled = false;
    }
});