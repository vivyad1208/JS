<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%
String folder = request.getParameter("folder");
String component = request.getParameter("component");
%>
<!DOCTYPE html>
<html>
<body>
	<script type="text/javascript" src="/ReactJS/js/react.min.js"></script>
	<script type="text/javascript" src="/ReactJS/js/react-dom.min.js" ></script>
	<script type="text/javascript" src="/ReactJS/js/babel.js" ></script>

	<script type="text/jsx" src="/ReactJS/jsx/<%=folder%>/<%=component%>.jsx" ></script>

	<h3 style="text-align: right"><a href="index.jsp">Back</a></h3>
	<div id="root" ></div>

</body>
</html>