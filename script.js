function detectRickroll() {
    const urlInput = document.getElementById("urlInput").value;
    const result = document.getElementById("result");

    // Known Rickroll video IDs
    const rickrollVideos = ["dQw4w9WgXcQ", "oHg5SJYRHA0", "6_b7RDuLwcI"];

    try {
        // Extract YouTube video ID
        const url = new URL(urlInput);
        const videoId = url.searchParams.get("v");

        if (rickrollVideos.includes(videoId)) {
            result.textContent = "⚠️ Warning: This is a Rickroll!";
            result.style.color = "red";
        } else {
            result.textContent = "✅ This link is safe. No Rickrolling detected.";
            result.style.color = "green";
        }
    } catch (error) {
        result.textContent = "❌ Invalid URL. Please enter a valid YouTube link.";
        result.style.color = "orange";
    }
}
