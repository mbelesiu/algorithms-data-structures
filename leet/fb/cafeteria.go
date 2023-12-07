package main

import (
	"math"
	"sort"
)

func getMaxAdditionalDinersCount(N int64, K int64, M int32, S []int64) int64 {
	// Write your code here
	sort.Slice(S, func(i, j int) bool { return S[i] < S[j] })

	S = append(S, (K + N + 1))

	var start, answer int64 = 1, 0

	interval := K + 1

	for _, s := range S {
		r := s - start - interval
		if r >= 0 {
			answer += int64(math.Floor(float64(r/interval)) + 1)
		}
		start = s + interval
	}

	return answer
}

// A cafeteria table consists of a row of N seats, numbered from 1 to N from left to right.
// Social distancing guidelines require that every diner be seated such that K seats to their left and
// K seats to their right (or all the remaining seats to that side if there are fewer than
// K) remain empty.
// There are currently M diners seated at the table, the ith of whom is in seat
// S i. No two diners are sitting in the same seat, and the social distancing guidelines are satisfied.
// Determine the maximum number of additional diners who can potentially sit at the table without social
// distancing guidelines being violated for any new or existing diners,
// assuming that the existing diners cannot move and that the additional
// diners will cooperate to maximize how many of them can sit down.
