// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::fmt::format;

#[tauri::command]
fn greet(name: &str) -> String{
  format!("welcome to use Nuxt + Tauri2!");
}

fn main() {
  app_lib::run();
}
