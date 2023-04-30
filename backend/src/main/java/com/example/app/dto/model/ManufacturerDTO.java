package com.example.app.dto.model;

import com.example.app.model.Manufacturer;
import com.example.app.model.Product;
import com.example.app.model.User;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.sql.Date;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@AllArgsConstructor
@NotBlank
@EqualsAndHashCode
@ToString
public class ManufacturerDTO {
    @Getter
    @Setter
    private Integer id;
    @NotBlank
    @Getter
    @Setter
    private String name;
    @Getter
    @Setter
    private String description;
    @Getter
    @Setter
    private Date registerDate;
    @Getter
    @Setter
    private String userHandle;

    public static ManufacturerDTO fromManufacturer(Manufacturer manufacturer){
        return new ManufacturerDTO(
                manufacturer.getId(),
                manufacturer.getName(),
                manufacturer.getDescription(),
                manufacturer.getRegisterDate(),
                manufacturer.getUser().getHandle()
        );
    }

    public static Manufacturer toManufacturer(ManufacturerDTO manufacturerDTO, User user){
        Manufacturer manufacturer = new Manufacturer();
        manufacturer.setId(manufacturer.getId());
        manufacturer.setDescription(manufacturerDTO.getDescription());
        manufacturer.setName(manufacturerDTO.getName());
        manufacturer.setRegisterDate(manufacturerDTO.getRegisterDate());
        manufacturer.setUser(user);
        return manufacturer;
    }
}
