
const app = {
    buildForm() {
      return [
        $('#name').val(),
        $('#position').val(),
        $('#office').val(),
        $('#extn').val(),
        $('#startDate').val().replace(new RegExp('-', 'g'), '/')
      ];
    },
    
    processForm() {
      const formData = this.buildForm();
      const baseURL = 'http://localhost:3000';
      axios.post(`${baseURL}/record`, formData)
        .then(response => console.log(response));
    },

    addRow(dataTable, data) {
      const addedRow = dataTable.row.add(data).draw();
      addedRow.show().draw(false);
  
      const addedRowNode = addedRow.node();
      $(addedRowNode).addClass('highlight');
    },

    start() {
      const dataTable = $('#realtime').DataTable({
        data: dataSet,
        columns: [
          { title: 'Name' },
          { title: 'Position' },
          { title: 'Office' },
          { title: 'Extn.' },
          { title: 'Start date' }
        ]
      });
  
      $('#add-employee').on('click', this.processForm.bind(this));
     
      // Pusher
      var pusher = new Pusher('e6c6d225b2ca71968dcc', {
        cluster: 'eu',
        encrypted: true
      });
  
      var channel = pusher.subscribe('employees');
      channel.bind('new-employee', (data) => {
        this.addRow(dataTable, data);
      });
    }
  };
  
  $(document).ready(() => app.start());
  