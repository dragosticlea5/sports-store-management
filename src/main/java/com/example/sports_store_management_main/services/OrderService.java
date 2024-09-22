package com.example.sports_store_management_main.services;
import com.example.sports_store_management_main.controllers.dtos.OrderDTO;
import com.example.sports_store_management_main.controllers.dtos.ProductDTO;
import com.example.sports_store_management_main.exceptions.ResourceNotFoundException;
import com.example.sports_store_management_main.mappers.OrderMapper;
import com.example.sports_store_management_main.persistence.entity.Customer;
import com.example.sports_store_management_main.persistence.entity.Order;
import com.example.sports_store_management_main.persistence.entity.Product;
import com.example.sports_store_management_main.persistence.repositories.OrderRepository;
import com.example.sports_store_management_main.persistence.repositories.CustomerRepository;
import com.example.sports_store_management_main.persistence.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderMapper orderMapper;

    public List<OrderDTO> getOrdersByCustomer(Long customerId) {
        //return orderRepository.findByCustomerId(customerId);
        List<Order> orders = orderRepository.findByCustomerId(customerId);
        return orders.stream()
                .map(orderMapper::toDTO)
                .collect(Collectors.toList());
    }

    public List<OrderDTO> getAllOrders() {
        return orderRepository.findAll()
                .stream()
                .map(orderMapper::toDTO)
                .collect(Collectors.toList());
    }

    public OrderDTO getOrderById(Long id) {
        return orderRepository.findById(id)
                .map(orderMapper::toDTO)
                .orElseThrow(() -> new ResourceNotFoundException("Order not found"));
    }

    public OrderDTO createOrder(OrderDTO orderDTO) {
        Order order = orderMapper.toEntity(orderDTO);
        Order savedOrder = orderRepository.save(order);
        return orderMapper.toDTO(savedOrder);
    }

    public OrderDTO updateOrder(Long id, OrderDTO orderDTO) {
        if (!orderRepository.existsById(id)) {
            throw new ResourceNotFoundException("Order not found");
        }
        orderDTO.setId(id);
        Order order = orderMapper.toEntity(orderDTO);
        Order updatedOrder = orderRepository.save(order);
        return orderMapper.toDTO(updatedOrder);
    }

    public void deleteOrder(Long id) {
        if (!orderRepository.existsById(id)) {
            throw new ResourceNotFoundException("Order not found");
        }
        orderRepository.deleteById(id);
    }

}

