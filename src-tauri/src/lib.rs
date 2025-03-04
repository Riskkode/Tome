// Learn more about Tauri commands at https://tauri.app/develop/calling-rust

mod commands;
mod tome_page;
use commands::get_folder_location;
use tome_page::{open_tome_manager, open_main_window};



use tauri_plugin_dialog::{DialogExt, FilePath};
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    let app = tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .invoke_handler(tauri::generate_handler![get_folder_location])
        .build(tauri::generate_context!())
        .expect("error while running tauri application");

    app.run(|app_handle, _event| {
        let app_handle = app_handle.clone();
        std::thread::spawn(move || {
            open_tome_manager(&app_handle);
        });
    });
}