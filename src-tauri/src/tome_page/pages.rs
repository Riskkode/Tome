pub mod pages {
   pub async fn open_tome_manager(app: &tauri::AppHandle) {
        let _wv_window = tauri::WebviewWindowBuilder::new(
            app,
            "manager",                                   // Unique label
            tauri::WebviewUrl::App("index.html".into()), // Change to your actual manager UI
        )
            .title("Tome: Library")
            .inner_size(800.0, 600.0) // Fixed size
            .resizable(false) // Disable resizing
            .build()
            .expect("Failed to create manager window");
    }

   pub async fn open_main_window(app: &tauri::AppHandle) {
        let _wv_window = tauri::WebviewWindowBuilder::new(
            app,
            "main",                                      // Unique label
            tauri::WebviewUrl::App("index.html".into()), // Main app UI
        )
            .title("Tome")
            .inner_size(800.0, 600.0)
            .build()
            .expect("Failed to create main window");
    }
}



