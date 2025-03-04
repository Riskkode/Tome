
pub mod tome_manager {
    use tauri_plugin_dialog::{DialogExt, FilePath};

    #[tauri::command]
    pub async fn get_folder_location(app: tauri::AppHandle) -> Option<FilePath> {
        let folder_path = app.dialog().file().blocking_pick_folder();
        folder_path
    }
}



