export const getId = () =>{
    const url = new URL(window.location); 
    const id = url.searchParams.get("id"); 
    return id; 
}