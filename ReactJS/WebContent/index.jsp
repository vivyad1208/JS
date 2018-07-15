<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" import="static constants.IndexConstant.*" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="ISO-8859-1">
	<title>React JS Index</title>
</head>
<body>
<%
for(int i=0; i<modules.length; i++) {
	String folder = folders[i];
	%>
	<h4><%=modules[i]%></h4>
	<ul>
	<%
	for(String component : components[i]) {
		String comp = component.replace(" ", "");
		%>
		<li>
			<a href="react.jsp?folder=<%=folder%>&component=<%=comp%>"><%=component%></a>
			---
			<a href="/ReactJS/jsx/<%=folder%>/<%=comp%>.jsx">(jsx)</a>
		</li>
	<%
	}
	%>
	</ul>
	<hr/>
<%
}
%>
</body>
</html>