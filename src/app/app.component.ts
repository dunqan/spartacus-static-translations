import {Component, Inject, Optional} from '@angular/core';
import {SERVER_REQUEST_ORIGIN} from '@spartacus/core';
import {REQUEST} from '@nguniversal/express-engine/tokens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'confo-test3-app';
  debugData = {};

  constructor(@Optional() @Inject(SERVER_REQUEST_ORIGIN) requestOrigin,
              @Optional() @Inject(REQUEST) request) {
    this.debugData = { requestOrigin,
      hostName: request?.hostname,
      originalUrl: request?.originalUrl,
      forwardedHost: request?.get('X-Forwarded-Host'),
      host: request?.get('host')
    };
  }
}
