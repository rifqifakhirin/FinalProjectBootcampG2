package com.bank.backend.finalprojectbackend.rabbitMQ;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.MessageProperties;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;

@Service
public class Producer {
    public void sendData(String dataString){
        ConnectionFactory factory = new ConnectionFactory();        //make connection to RabbitMQ
        factory.setHost("localhost");
        try (Connection connection = factory.newConnection();
             Channel channel = connection.createChannel()) {
            Thread.sleep(100);                                 //delay the process temporarily
                                                                    //so that the receiver can start and standby simultaneously
            String ExchangeName = "userBank";                       //Specifies the exchange name
            boolean durable = true;
            channel.exchangeDeclare(ExchangeName, "fanout", durable, false, false, null);
            channel.basicPublish(ExchangeName, "",              //Sends messages to receive and receiveLog
                    MessageProperties.PERSISTENT_TEXT_PLAIN,
                    dataString.getBytes(StandardCharsets.UTF_8));
            System.out.println("[Producer] \t: Sent '" + dataString + "'");
        }catch (Exception e){
            System.out.println("Error Send to RabbitMQ : " + e);
        }
    }
}
