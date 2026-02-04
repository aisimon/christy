# Christy's Learning Hub

A fun collection of interactive games and learning activities for Christy.

## Getting Started

To view and interact with the learning hub locally, follow one of these methods:

### Method 1: VS Code Live Preview (Recommended)
1. Install the **Live Preview** extension in VS Code.
2. Open `index.htm`.
3. Right-click anywhere in the file and select **Live Preview: Show Preview**.

### Method 2: Python HTTP Server
If you have Python installed, you can serve the project using a simple command:
1. Open your terminal in the project directory.
2. Run the following command:
   ```bash
   python3 -m http.server 8123
   ```
3. Open your browser and navigate to `http://localhost:8123/index.htm`.

## Developer Mode & Debugging

If you are in **Developer Mode** or need to test specific features like streaks and badges, you can use the following secret commands while on the `index.htm` page:

- **Type directly on your keyboard**:
  - `reset`: Clears all `localStorage` data and resets your progress.
  - `goto[number]`: Mocks a streak for the specified number of days (e.g., `goto9` to unlock three badges).
- **Hidden Input Box**: There is a subtle, semi-transparent input box at the bottom of the hub page where you can also type these commands and press **Enter**.

---
*Happy Learning, Christy! 🌟*
