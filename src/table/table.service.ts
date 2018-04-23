import { Component } from '@nestjs/common';

@Component()
export class TableService {
    add(newEmployee) {
        const Pusher = require('pusher');

        var pusher = new Pusher({
            appId: '410534',
            key: 'e6c6d225b2ca71968dcc',
            secret: '6544eaa9a784f0b0642b',
            cluster: 'eu',
            encrypted: true
          });

          pusher.trigger('employees', 'new-employee', newEmployee);
    }
}