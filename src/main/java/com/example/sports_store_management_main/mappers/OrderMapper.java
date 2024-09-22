package com.example.sports_store_management_main.mappers;

import com.example.sports_store_management_main.controllers.dtos.OrderDTO;
import com.example.sports_store_management_main.persistence.entity.Customer;
import com.example.sports_store_management_main.persistence.entity.Order;
import org.springframework.stereotype.Component;

@Component
public class OrderMapper {

    public OrderDTO toDTO(Order order) {
        if (order == null) {
            return null;
        }
        OrderDTO dto = new OrderDTO();
        dto.setId(order.getId());
        dto.setCustomerId(order.getCustomer().getId());
        // Map other fields
        return dto;
    }

    public Order toEntity(OrderDTO orderDTO) {
        if (orderDTO == null) {
            return null;
        }
        Order order = new Order();
        order.setId(orderDTO.getId());
        Customer customer = new Customer();
        customer.setId(orderDTO.getCustomerId());
        order.setCustomer(customer);
        return order;
    }
}
