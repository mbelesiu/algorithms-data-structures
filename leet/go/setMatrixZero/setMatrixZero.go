package setmatrixzero

// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

func SetZeroes(matrix [][]int) {

	m, n := len(matrix), len(matrix[0])

	for r := 0; r < m; r++ {
		for c := 0; c < n; c++ {
			if matrix[r][c] != 0 {
				continue
			}
			for r2 := 0; r2 < m; r2++ {
				if matrix[r2][c] != 0 {
					matrix[r2][c] = 2147483649
				}
			}
			for c2 := 0; c2 < n; c2++ {
				if matrix[r][c2] != 0 {
					matrix[r][c2] = 2147483649
				}
			}
		}
	}

	for r := 0; r < m; r++ {
		for c := 0; c < n; c++ {
			if matrix[r][c] == 2147483649 {
				matrix[r][c] = 0
			}
		}
	}

}
