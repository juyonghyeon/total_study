package org.koreait.board.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class BoardView2 {
    @Id
    private Long seq;

    @Id
    private int uid;
}
