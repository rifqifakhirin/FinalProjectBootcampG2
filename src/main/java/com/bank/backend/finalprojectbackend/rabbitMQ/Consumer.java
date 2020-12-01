package com.bank.backend.finalprojectbackend.rabbitMQ;

import com.bank.backend.finalprojectbackend.model.ModelLogin;
import com.bank.backend.finalprojectbackend.model.ModelRegister;
import com.bank.backend.finalprojectbackend.service.AppService;
import com.google.gson.Gson;
import com.rabbitmq.client.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

@Service
public class Consumer {
    private static final Logger logger = LoggerFactory.getLogger(Consumer.class);

    @Autowired
    AppService appService;

    public String receive(String actOption) throws IOException, TimeoutException {
        ConnectionFactory factory = new ConnectionFactory();        //make connection to RabbitMQ
        factory.setHost("localhost");
        Connection connection = factory.newConnection();
        Channel channel = connection.createChannel();

        String ExchangeName = "userBank";                       //Specifies the exchange name
        boolean autoAck = true;
        channel.exchangeDeclare(ExchangeName, "fanout", autoAck, false, false, null);
        String queueName = channel.queueDeclare().getQueue();       //Generate queue name
        channel.queueBind(queueName, ExchangeName, "");

        System.out.println("[Receiver] \t: Waiting for messages from the Database...");
        GetResponse response;
        do{                                                         //Looping for
            response = channel.basicGet(queueName, true);        //retrieve messages from RabbitMQ
        }while (response == null);                                  //stop when the message is retrieved

        String dataString = new String(                             //Retrieves the message received by the response
                response.getBody(), "UTF-8");
        System.out.println("[Receiver] \t: Received : '" + dataString + "'");

        channel.close();                                            //close connection
        connection.close();

        //Sends to the database and returns the process results in the database
        switch (actOption){                                              //Access database according to
            case "registration":                                                  //action given
                return appService.registerBank(dataString);
            case "login":
                return appService.userLogin(dataString);
            case "pdambill":
                return appService.pdamBill(dataString);
            case "pdampay":
                return appService.pdamPay(dataString);
            case "bpjsbill":
                return appService.bpjsBill(dataString);
            case "bpjspay":
                return appService.bpjsPay(dataString);
            default:
                return "wrong option service";
        }
    }

    public void receiveLog(String actOption) throws IOException, TimeoutException {
        ConnectionFactory factory = new ConnectionFactory();
        factory.setHost("localhost");
        Connection connection = factory.newConnection();
        Channel channel = connection.createChannel();

        String ExchangeName = "userBank";
        boolean autoAck = true;

        channel.exchangeDeclare(ExchangeName, "fanout", autoAck, false, false, null);
        String queueName = channel.queueDeclare().getQueue();
        channel.queueBind(queueName, ExchangeName, "");

        DeliverCallback deliverCallback = (consumerTag, delivery) -> {
            String dataString = new String(delivery.getBody(), "UTF-8");
            try {
                switch (actOption){
                    case "registration":
                        ModelRegister userReg = new Gson().fromJson(dataString, ModelRegister.class);
                        logger.info("Username :'" + userReg.getUsername() + "' doing :'" + actOption + "'");
                        break;
                    case "login":
                        ModelLogin userLog = new Gson().fromJson(dataString, ModelLogin.class);
                        logger.info("Username :'" + userLog.getUserName() + "' doing :'" + actOption + "'");
                        break;
                    case "pdambill":
                        logger.info("Search PDAM bill for member number : " + dataString);
                        break;
                    case "pdampay":
                        logger.info("Application is doing payment for member number : " + dataString);
                        break;
                    case "bpjsbill":
                        logger.info("Search BPJS bill for member number : " + dataString);
                        break;
                    case "bpjspay":
                        logger.info("Application is doing payment for member number : " + dataString);
                        break;
                    default:
                        break;
                }
                channel.close();
                connection.close();
            }catch (Exception e){
                System.out.println("Error close connection receiveLog : " + e);
            }
        };
        channel.basicConsume(queueName, true, deliverCallback, consumerTag -> { });
    }
}
