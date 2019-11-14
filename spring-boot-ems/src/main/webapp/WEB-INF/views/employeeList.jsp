<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
 <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  
    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Bootstrap Example</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
</head>

<body>




<div  class="container">
<a href="/atos-syntel-ems-mvc/spring/new"> <input type="button"  class="btn btn-primary"  value="ADD EMPLOYEE"></a>



<table class="table table-hover table-striped table-responsive table-bordered">
<thead>
<tr>
<th>Employee Id</th>
<th>First Name</th>
<th>Last Name</th>
<th>Salary</th>
<th>Email</th>
<th>Mobile</th>
<th>DOJ</th>
<th>PAN</th>
<th>EDIT</th>
<th>DELETE</th>
</tr>
</thead>
<tbody>
<c:forEach   var="e"  items="${employees}">
<tr>
<td>${e.employeeId}</td>
<td>${e.fname}</td>
<td>${e.lname}</td>
<td>${e.salary}</td>
<td>${e.email}</td>
<td>${e.mobile}</td>
<td>${e.doj}</td>
<td>${e.pan}</td>
<td><a href="/atos-syntel-ems-mvc/spring/edit/${e.employeeId}"> <input type="button"  class="btn btn-success"  value="EDIT"></a></td>
<td><a href="/atos-syntel-ems-mvc/spring/delete?employeeId=${e.employeeId}"> <input type="button"  class="btn btn-danger"  value="DELETE"></a></td>
</tr>
</c:forEach>


</tbody>
</table>

</div>

</body>
</html>