export function Navigate(page: string) {
    let ext = "";
    //let pre = "";
    let path = window.location.pathname.split("/");
    let strippedPath = path.slice(0, path.length - 1).join("/");
    if (path[path.length - 1].search("html") > -1) {
        ext = ".html";
        //pre = "/";
    }
    window.location.href = strippedPath + page + ext;
}