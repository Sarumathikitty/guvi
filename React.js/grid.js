<!DOCTYPE html>
<html>
  <head>
    <title>grid</title> 

    <link rel="stylesheet"href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>

    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>

    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  </head>
  <body>
    <div id="root" style="margin-right:30px;margin-left:190px"></div>

    <script>
      const rootElement = document.getElementById("root");     
      const grid = React.createElement(
         "div",
         { className: "gridout",style:{border:"1px solid black",padding:"40px",boxShadow:"3px 3px 5px black"} },        
        
       );

       const DivElement1 = React.createElement(
         "div",
         { className: "gridbox",style:{ display:"grid",gridTemplateColumns:"auto auto auto auto",gridColumnGap:"10px",gridRowGap:"10px",width:"20px",padding:"10px"}},
         grid,
         grid,
         grid,
         grid, 
         grid,
         grid,
         grid,
         grid,
         grid,
         grid,
         grid,
         grid,

       );     

       ReactDOM.render(DivElement1,rootElement);   

      console.log(React);
      console.log(ReactDOM);
    </script>
  </body>
</html>
