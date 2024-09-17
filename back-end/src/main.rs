use axum::{response::Html, routing::get, Router};
use std::net::SocketAddr;
use tokio::net::TcpListener;

#[tokio::main]
async fn main() {
    let hello_route = Router::new().route(
        "/hello",
        get(|| async {
            Html("Hello World</strong>") 
        }),
    );

    let address: SocketAddr = SocketAddr::from(([127, 0, 0, 1], 8080));
    let listener: TcpListener = TcpListener::bind(&address).await.unwrap();
    println!("->> LISTENING ON {address}\n");

    axum::serve(listener, hello_route.into_make_service()).await.unwrap();
}
