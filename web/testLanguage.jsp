<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/5/22
  Time: 9:19
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<spring:message code="se" var="btnSelect"></spring:message>
<form action="/testLanguage" method="post">
    <input type="text" name="username">
    <input type="submit" value="${btnSelect}">
</form>
<button><spring:message code="se"></spring:message></button>
</body>
</html>
