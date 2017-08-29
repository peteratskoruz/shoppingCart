import {Resolve} from '@angular/router';

export class MyData implements Resolve<any> {
    resolve() {
        return {
            hi: 'resolve example'
        };
    }
}