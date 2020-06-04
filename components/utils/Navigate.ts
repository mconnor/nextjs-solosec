export function Navigate(page: string) {
    let ext = "";
    let pre = "";
    let path = window.location.pathname.split("/");
    let strippedPath = path.slice(0, path.length - 1).join("/");
    if (path[path.length - 1].search("html") > -1) {
        ext = ".html";
        pre = "/";
        //let url = strippedPath + pre + page + ext;
        // const link = document.createElement(`link`);
        // link.rel = `dns-prefetch`;
        // link.href = url;
        //
        // document.head.appendChild(link);
        // @ts-ignore
        // caches.open('mycache').then(cache => {
        //     cache.add("./" + page + ext)
        //         .then(() => {
        //             window.location.href = strippedPath + pre + page + ext;
        //         })
        //         .catch(e=>console.error(e))
        // })
        window.location.href = strippedPath + pre + page + ext;

        // setTimeout(()=>{
        //     window.location.href = strippedPath + pre + page + ext;
        // }, 1000)
    } else {
        window.location.href = strippedPath + pre + page + ext;
    }
}