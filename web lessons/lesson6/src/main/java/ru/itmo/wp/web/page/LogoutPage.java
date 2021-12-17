package ru.itmo.wp.web.page;

import ru.itmo.wp.model.domain.Event;
import ru.itmo.wp.model.service.EventService;
import ru.itmo.wp.web.exception.RedirectException;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@SuppressWarnings({"unused", "RedundantSuppression"})
public class LogoutPage extends Page {
    private final EventService eventService = new EventService();
    private void action(HttpServletRequest request, Map<String, Object> view) {

        request.getSession().setAttribute("message", "Good bye. Hope to see you soon!");
        eventService.saveEvent(Event.EventType.LOGOUT, getUser().getId());
        request.getSession().removeAttribute("user");
        throw new RedirectException("/index");
    }
}
