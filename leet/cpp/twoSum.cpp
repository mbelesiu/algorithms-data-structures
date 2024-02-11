#include <vector>
#include <map>

using namespace std;

// class Solution {
// public:
//     vector<int> twoSum(vector<int>& nums, int target) {
//         vector<int> answer;
//         for( int i = 0; i < nums.size(); i++) {
//             for (int j = (i + 1); j < nums.size(); j++) {
//                 if(target == nums[i] + nums[j]){
//                     answer = {i,j};
//                     return answer;
//                 }
//             }
//         }
//         return answer;
//     }
// };

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        map<int, int> indices;
        for (int i = 0; i < nums.size(); i++) {
            if (indices.find(target - nums[i]) != indices.end()) {
                return {indices[target - nums[i]], i};
            }
            indices[nums[i]] = i;
        }
        return {};
    }
};