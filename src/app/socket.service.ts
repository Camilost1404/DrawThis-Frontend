import { EventEmitter, Injectable, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService extends Socket {

  @Output() outEven: EventEmitter<any> = new EventEmitter();

  constructor(private cookieService: CookieService) {
    super({
      url: 'https://powerful-bastion-19748.herokuapp.com/', //
      options: {
        query: {
          // Obtener el nombre de la sala guardada en la cookie
          nameRoom: cookieService.get('room'),
        }
      }
    })

    this.listen();
  }

  // Escuchar lo que el backend emite
  listen = () => {
    this.ioSocket.on('event', (res: any)  => this.outEven.emit(res))
  }

  // Emitir al backend
  emitEvent = (payLoad = {}) => {
    this.ioSocket.emit('event', payLoad)
  }
}
