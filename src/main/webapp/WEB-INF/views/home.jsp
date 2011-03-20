<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<html>
<head>
	<title>Home</title>
	<link href="<c:url value="/resources/lib/ext-3.3.1/resources/css/ext-all.css" />" rel="stylesheet" type="text/css" />
	<script type="text/javascript" src="<c:url value="/resources/lib/ext-3.3.1/adapter/ext/ext-base.js" />"></script>
	<script type="text/javascript" src="<c:url value="/resources/lib/ext-3.3.1/ext-all.js" />"></script>
	<script type="text/javascript">
		if (Ext.BLANK_IMAGE_URL.substr(0, 5) != 'data:') {
			Ext.BLANK_IMAGE_URL = '<c:url value="/resources/lib/ext-3.3.1/resources/images/default/s.gif" />';
		}
		var loadUrl = '${ctx}/load';
		var addUrl = '${ctx}/add';
	</script>	
	<script type="text/javascript" src="<c:url value="/resources/js/spring-mvc-forms.js" />"></script>

	<style type="text/css">
		body {
		  	font: normal 12px helvetica,arial,verdana,tahoma,sans-serif;
		}
		.my-form-class {
			margin:  20px 30px;
		}
	</style>
  	
</head>
<body>
	<div class="my-form-class"><a href="${ctx}/j_spring_security_logout">Log Out</a></div>
</body>
</html>
