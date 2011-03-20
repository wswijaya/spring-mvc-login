package org.xaab.springmvc;
import java.io.IOException;
import java.io.OutputStream;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.xaab.springmvc.model.LoginStatus;


public class LoginFailureHandler implements AuthenticationFailureHandler {

	public void onAuthenticationFailure(HttpServletRequest request,
			HttpServletResponse response, AuthenticationException auth)
			throws IOException, ServletException {
		
		ObjectMapper mapper = new ObjectMapper();
		LoginStatus status = new LoginStatus(false, false, null, "Login failed. Try again.");
		OutputStream out = response.getOutputStream();
		mapper.writeValue(out, status);
	}

}
