export class Router{
    routes = {}

    add(routeName, routePage){
        this.routes[routeName] = routePage
    }

    route(event){
        event = event || window.event
        event.preventDefault()

        window.history.pushState({},"", event.target.href)

        this.handle()
    }


    handle(){
        const {pathname} = window.location
        const route = this.routes[pathname] || this.routes[404]

        fetch(route).then(data => data.text())
        .then(html => {document.querySelector('#app').innerHTML = html})
    }

    load404(){
        this.routes[404]

        fetch('/pages/404.html').then()
    }
}