<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>  
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>  
 
 
    
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

<form:form    modelAttribute="employee"  method="post"  action="/atos-syntel-ems-mvc/spring/update">
<table class="table table-hover table-striped table-responsive table-bordered">
<tbody>


<tr>
<th> <form:label path="employeeId">Employee Id</form:label></th>
<td> <form:input path="employeeId"/></td>
</tr>


<tr>
<th> <form:label path="fname">First Name</form:label></th>
<td> <form:input path="fname"/></td>
</tr>


<tr>
<th> <form:label path="lname">Last Name</form:label></th>
<td> <form:input path="lname"/></td>
</tr>


<tr>
<th> <form:label path="salary">Salary</form:label></th>
<td> <form:input path="salary"/></td>
</tr>


<tr>
<th> <form:label path="email">Email</form:label></th>
<td> <form:input path="email"/></td>
</tr>

<tr>
<th> <form:label path="mobile">Mobile</form:label></th>
<td> <form:input path="mobile"/></td>
</tr>


<tr>
<th> <form:label path="pan">PAN</form:label></th>
<td> <form:input path="pan"/></td>
</tr>


<tr>
<th> <form:label path="doj">DOJ</form:label></th>
<td> <form:input path="doj"/></td>
</tr>
<tr>
<td colspan="2"><input type="submit"  class="btn btn-primary"  value="SAVE EMPLOYEE"></td>
</tr>
</tbody>
</table>
</form:form>












<hr/>








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