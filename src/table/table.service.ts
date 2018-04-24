import { Component } from '@nestjs/common';

@Component()
export class TableService {
    add(newEmployee) {
        const Pusher = require('pusher');

        var pusher = new Pusher({
            appId: 'APP_ID',
            key: 'YOUR_API_KEY',
            secret: 'YOUR_API_KEY',
            cluster: 'CLUSTER',
            encrypted: true
          });

          pusher.trigger('employees', 'new-employee', newEmployee);
    }
}