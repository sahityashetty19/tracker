package tracker.exceptions;

/**
 * Created by Shetty on 6/1/2017.
 */

public class BadRequestException extends RuntimeException {
        public BadRequestException(String message){
            super(message);
        }

        public BadRequestException(String message, Throwable cause){
            super(message,cause);
        }

    }