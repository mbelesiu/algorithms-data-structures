package setmatrixzero

import (
	"fmt"
	"reflect"
	"testing"
)

var (
	cases = []struct {
		input  [][]int
		output [][]int
	}{
		{
			[][]int{{1, 1, 1}, {1, 0, 1}, {1, 1, 1}},
			[][]int{{1, 0, 1}, {0, 0, 0}, {1, 0, 1}},
		},

		{
			[][]int{{0, 1, 2, 0}, {3, 4, 5, 2}, {1, 3, 1, 5}},
			[][]int{{0, 0, 0, 0}, {0, 4, 5, 0}, {0, 3, 1, 0}},
		},
	}
)

func TestSetZeroes(t *testing.T) {

	for _, test := range cases {
		t.Run(fmt.Sprintf("%v gets converted into %v", test.input, test.output), func(t *testing.T) {
			SetZeroes(test.input)

			if !reflect.DeepEqual(test.input, test.output) {
				t.Errorf("got %v want %v", test.input, test.output)
			}
		})
	}
}
