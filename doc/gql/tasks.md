
query {
  tasks {
    id
    title
  }
}
***
query {
  task(id: "60d3d4dc9867816a2cae90c1"){
    id
    title
  }
}
***
mutation add {
  addTask( title: "title_6") {
    id
    title
  }
}
***
mutation update {
  updateTask(id: "60d3d62f16ced36b7fa1f3d6", title: "b4aa" ) {
    id
    title
  }
}
***
mutation delete {
  deleteTask (id: "60d3d656960dbf6bf0a43103" ) {
    id
  }
}
***
