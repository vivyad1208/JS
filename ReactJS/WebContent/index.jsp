<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%
String[] modules = {"React Components", "Class, State, Life Cycle, and Event Handlers"};
String[] folders = {"components", "classStateEvent"};
String[][] components = {
	{"Rendering", "Functional Components", "Composition", "Conditional Rendering"},
	{"Class Components", "State"}
};
%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="ISO-8859-1">
	<title>React JS Index</title>
</head>
<body>
<%
for(int i=0; i<modules.length; i++) {
%>
	<h4><%=modules[i]%></h4>
	<ul>
	<%
	String[] component = components[i];
	for(int j=0; j<component.length; j++) {
	%>
		<li><a href="react.jsp?folder=<%=folders[i]%>&component=<%=component[j].replace(" ", "")%>"><%=component[j]%></a></li>
	<%
	}
	%>
	</ul>
<%
}
%>
</body>
</html>