import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
    @Input() element: { type: string, name: string, content: string };
    // With Input() we are successfully  exposing this property to the world.
    // Now any Parent component will have an access to this element array

    // Alias can be used to give different name of element component to it's parent
    // Eg: @Input('srvElement) element: { type: string, name: string, content: string };
    // With code above , now we have  to use srvElement to bind to element object

    constructor() { }

    ngOnInit() {
    }

}
