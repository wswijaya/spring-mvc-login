package org.xaab.springmvc;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.ConstraintViolation;
import javax.validation.Validator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.xaab.springmvc.model.PersonalContact;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {

	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

	@Autowired
	private Validator validator;
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value="/", method=RequestMethod.GET)
	public String home() {
		logger.info("Welcome home!");
		return "home";
	}

	@RequestMapping(value="/load", method=RequestMethod.POST)
	public @ResponseBody Map<String, ? extends Object> load(PersonalContact input) {
		logger.info("Inside load");
		PersonalContact pc = new PersonalContact(1L, "Wowi", "89281932", "wo.wi@abcxyz.com");
		Map<String, Object> data = new HashMap<String, Object>();
		data.put("success",Boolean.TRUE);
		data.put("data", pc);
		
		return data;
	}

	@RequestMapping(value="/add", method=RequestMethod.POST)
	public @ResponseBody Map<String, ? extends Object> add(PersonalContact input, HttpSession session) {
		logger.info("Inside add");
		
		Map<String, Object> data = new HashMap<String, Object>();
		
		Set<ConstraintViolation<PersonalContact>> failures = validator.validate(input);
		if (!failures.isEmpty()) {
			//response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
			data.put("success",Boolean.FALSE);
			data.put("errors", validationMessages(failures));
			data.put("errorMessage", "Add Failed!");
		} else {
			session.setAttribute(input.getName(), input);
			data.put("success",Boolean.TRUE);
		}

		return data;
	}	
	
	private Map<String, String> validationMessages(Set<ConstraintViolation<PersonalContact>> failures) {
		Map<String, String> failureMessages = new HashMap<String, String>();
		for (ConstraintViolation<PersonalContact> failure : failures) {
			failureMessages.put(failure.getPropertyPath().toString(), failure.getMessage());
		}
		return failureMessages;
	}
}

