package com.monocle.service;

import com.monocle.dto.AuthResponse;
import com.monocle.dto.LoginRequest;
import com.monocle.dto.RegisterRequest;
import com.monocle.entity.User;
import com.monocle.exception.NotFoundException;
import com.monocle.exception.UserAlreadyExistsException;
import com.monocle.repository.UserRepository;
import com.monocle.security.JwtUtil;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.slf4j.MDC;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;


    public AuthResponse registerNewUser(RegisterRequest request) {
        if (userRepository.existsByUsername(request.getUsername())) {
            throw new UserAlreadyExistsException("Username is already in use");
        }

        User user = new User();
        user.setUsername(request.getUsername());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        userRepository.save(user);

        // MDC.put("username", request.getUsername());
        // MDC.put("userId", String.valueOf(user.getId()));
        // log.info("User '{}' successfully registered", user.getUsername());

        // UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUsername());

        // String accessToken = jwtUtil.generateAccessToken(userDetails);
        // String refreshToken = jwtUtil.generateRefreshToken(userDetails);

        // saveRefreshToken(user, refreshToken);
        // MDC.clear();
        // return new AuthResponse(accessToken, refreshToken);

        // Генерация и отправка OTP

        return new AuthResponse(null);
    }

    @Transactional
    public AuthResponse authenticate(LoginRequest request) {
        Authentication auth = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
        );

        UserDetails userDetails = (UserDetails) auth.getPrincipal();

        String accessToken = jwtUtil.generateAccessToken(userDetails);

        User user = userRepository.findByUsername(userDetails.getUsername())
                .orElseThrow(() -> new NotFoundException("User not found"));


        MDC.put("username", user.getUsername());
        MDC.put("userId", String.valueOf(user.getId()));
        MDC.clear();
        return new AuthResponse(accessToken);
    }
}
