
/* line 1 "ragel/i18n/et.js.rl" */
;(function() {


/* line 126 "ragel/i18n/et.js.rl" */



/* line 11 "js/lib/gherkin/lexer/et.js" */
var _lexer_actions = [
	0, 1, 0, 1, 1, 1, 2, 1, 
	3, 1, 4, 1, 5, 1, 6, 1, 
	7, 1, 8, 1, 9, 1, 10, 1, 
	11, 1, 12, 1, 13, 1, 16, 1, 
	17, 1, 18, 1, 19, 1, 20, 1, 
	21, 1, 22, 1, 23, 2, 2, 18, 
	2, 3, 4, 2, 13, 0, 2, 14, 
	15, 2, 17, 0, 2, 17, 1, 2, 
	17, 16, 2, 17, 19, 2, 18, 6, 
	2, 18, 7, 2, 18, 8, 2, 18, 
	9, 2, 18, 10, 2, 18, 16, 2, 
	20, 21, 2, 22, 0, 2, 22, 1, 
	2, 22, 16, 2, 22, 19, 3, 4, 
	14, 15, 3, 5, 14, 15, 3, 11, 
	14, 15, 3, 12, 14, 15, 3, 13, 
	14, 15, 3, 14, 15, 18, 3, 17, 
	0, 11, 3, 17, 14, 15, 4, 2, 
	14, 15, 18, 4, 3, 4, 14, 15, 
	4, 17, 0, 14, 15, 5, 17, 0, 
	11, 14, 15
];

var _lexer_key_offsets = [
	0, 0, 18, 35, 36, 37, 39, 41, 
	46, 51, 56, 61, 65, 69, 71, 72, 
	73, 74, 75, 76, 77, 78, 79, 80, 
	81, 82, 83, 84, 85, 86, 87, 89, 
	91, 96, 103, 108, 109, 110, 111, 112, 
	113, 114, 115, 117, 118, 119, 120, 121, 
	122, 123, 124, 125, 126, 133, 135, 137, 
	139, 141, 143, 145, 162, 163, 164, 166, 
	167, 168, 169, 170, 171, 172, 173, 174, 
	186, 188, 190, 192, 194, 196, 198, 200, 
	202, 204, 206, 208, 210, 212, 214, 216, 
	218, 220, 222, 224, 226, 228, 230, 232, 
	234, 236, 238, 240, 242, 244, 246, 248, 
	250, 252, 254, 256, 258, 260, 262, 264, 
	266, 268, 270, 272, 274, 276, 277, 278, 
	279, 280, 281, 282, 283, 284, 285, 286, 
	287, 288, 289, 290, 291, 292, 293, 306, 
	308, 310, 312, 314, 316, 318, 320, 322, 
	324, 326, 328, 330, 332, 334, 336, 338, 
	340, 342, 344, 346, 348, 350, 352, 354, 
	356, 359, 361, 363, 365, 367, 369, 371, 
	374, 376, 378, 380, 382, 384, 386, 388, 
	390, 392, 394, 396, 397, 398, 399, 400, 
	401, 402, 403, 404, 405, 406, 407, 408, 
	409, 424, 426, 428, 430, 432, 434, 436, 
	438, 440, 442, 444, 446, 448, 450, 452, 
	454, 456, 458, 460, 462, 464, 466, 468, 
	470, 472, 474, 477, 479, 481, 483, 485, 
	487, 489, 491, 493, 495, 497, 499, 501, 
	503, 505, 507, 509, 511, 513, 515, 517, 
	520, 522, 524, 526, 528, 530, 531, 532, 
	533, 534, 535, 536, 537, 551, 553, 555, 
	557, 559, 561, 563, 565, 567, 569, 571, 
	573, 575, 577, 579, 581, 583, 585, 587, 
	589, 591, 593, 595, 597, 599, 601, 604, 
	606, 608, 610, 612, 614, 616, 618, 620, 
	622, 624, 626, 628, 630, 632, 634, 636, 
	638, 640, 642, 644, 647, 649, 653, 659, 
	662, 664, 670, 687, 688, 689
];

var _lexer_trans_keys = [
	10, 32, 34, 35, 37, 42, 64, 69, 
	74, 75, 79, 82, 83, 84, 124, 239, 
	9, 13, 10, 32, 34, 35, 37, 42, 
	64, 69, 74, 75, 79, 82, 83, 84, 
	124, 9, 13, 34, 34, 10, 13, 10, 
	13, 10, 32, 34, 9, 13, 10, 32, 
	34, 9, 13, 10, 32, 34, 9, 13, 
	10, 32, 34, 9, 13, 10, 32, 9, 
	13, 10, 32, 9, 13, 10, 13, 10, 
	95, 70, 69, 65, 84, 85, 82, 69, 
	95, 69, 78, 68, 95, 37, 32, 10, 
	13, 10, 13, 13, 32, 64, 9, 10, 
	9, 10, 13, 32, 64, 11, 12, 10, 
	32, 64, 9, 13, 101, 108, 100, 97, 
	100, 101, 115, 97, 117, 104, 116, 117, 
	109, 105, 100, 58, 10, 10, 10, 32, 
	35, 79, 124, 9, 13, 10, 109, 10, 
	97, 10, 100, 10, 117, 10, 115, 10, 
	58, 10, 32, 34, 35, 37, 42, 64, 
	69, 74, 75, 79, 82, 83, 84, 124, 
	9, 13, 117, 105, 32, 100, 109, 97, 
	100, 117, 115, 58, 10, 10, 10, 32, 
	35, 37, 64, 74, 79, 82, 83, 84, 
	9, 13, 10, 95, 10, 70, 10, 69, 
	10, 65, 10, 84, 10, 85, 10, 82, 
	10, 69, 10, 95, 10, 69, 10, 78, 
	10, 68, 10, 95, 10, 37, 10, 117, 
	10, 104, 10, 116, 10, 117, 10, 109, 
	10, 105, 10, 100, 10, 58, 10, 109, 
	10, 97, 10, 100, 10, 117, 10, 115, 
	10, 97, 10, 97, 10, 109, 10, 115, 
	10, 116, 10, 115, 10, 101, 10, 110, 
	10, 97, 10, 97, 10, 114, 10, 105, 
	10, 117, 10, 109, 10, 97, 10, 117, 
	10, 115, 10, 116, 97, 97, 109, 115, 
	116, 115, 101, 110, 97, 97, 114, 105, 
	117, 109, 58, 10, 10, 10, 32, 35, 
	37, 42, 64, 69, 74, 75, 79, 83, 
	9, 13, 10, 95, 10, 70, 10, 69, 
	10, 65, 10, 84, 10, 85, 10, 82, 
	10, 69, 10, 95, 10, 69, 10, 78, 
	10, 68, 10, 95, 10, 37, 10, 32, 
	10, 101, 10, 108, 10, 100, 10, 97, 
	10, 100, 10, 101, 10, 115, 10, 97, 
	10, 117, 10, 105, 10, 32, 100, 10, 
	109, 10, 97, 10, 100, 10, 117, 10, 
	115, 10, 58, 10, 105, 116, 10, 105, 
	10, 115, 10, 101, 10, 110, 10, 97, 
	10, 97, 10, 114, 10, 105, 10, 117, 
	10, 109, 105, 116, 105, 115, 101, 110, 
	97, 97, 114, 105, 117, 109, 58, 10, 
	10, 10, 32, 35, 37, 42, 64, 69, 
	74, 75, 79, 82, 83, 84, 9, 13, 
	10, 95, 10, 70, 10, 69, 10, 65, 
	10, 84, 10, 85, 10, 82, 10, 69, 
	10, 95, 10, 69, 10, 78, 10, 68, 
	10, 95, 10, 37, 10, 32, 10, 101, 
	10, 108, 10, 100, 10, 97, 10, 100, 
	10, 101, 10, 115, 10, 97, 10, 117, 
	10, 105, 10, 32, 100, 10, 109, 10, 
	97, 10, 100, 10, 117, 10, 115, 10, 
	58, 10, 97, 10, 97, 10, 109, 10, 
	115, 10, 116, 10, 115, 10, 101, 10, 
	110, 10, 97, 10, 97, 10, 114, 10, 
	105, 10, 117, 10, 109, 10, 105, 116, 
	10, 105, 10, 97, 10, 117, 10, 115, 
	10, 116, 97, 117, 115, 116, 58, 10, 
	10, 10, 32, 35, 37, 42, 64, 69, 
	74, 75, 79, 82, 83, 9, 13, 10, 
	95, 10, 70, 10, 69, 10, 65, 10, 
	84, 10, 85, 10, 82, 10, 69, 10, 
	95, 10, 69, 10, 78, 10, 68, 10, 
	95, 10, 37, 10, 32, 10, 101, 10, 
	108, 10, 100, 10, 97, 10, 100, 10, 
	101, 10, 115, 10, 97, 10, 117, 10, 
	105, 10, 32, 100, 10, 109, 10, 97, 
	10, 100, 10, 117, 10, 115, 10, 58, 
	10, 97, 10, 97, 10, 109, 10, 115, 
	10, 116, 10, 115, 10, 101, 10, 110, 
	10, 97, 10, 97, 10, 114, 10, 105, 
	10, 117, 10, 109, 10, 105, 116, 10, 
	105, 32, 124, 9, 13, 10, 32, 92, 
	124, 9, 13, 10, 92, 124, 10, 92, 
	10, 32, 92, 124, 9, 13, 10, 32, 
	34, 35, 37, 42, 64, 69, 74, 75, 
	79, 82, 83, 84, 124, 9, 13, 187, 
	191, 0
];

var _lexer_single_lengths = [
	0, 16, 15, 1, 1, 2, 2, 3, 
	3, 3, 3, 2, 2, 2, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 2, 2, 
	3, 5, 3, 1, 1, 1, 1, 1, 
	1, 1, 2, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 5, 2, 2, 2, 
	2, 2, 2, 15, 1, 1, 2, 1, 
	1, 1, 1, 1, 1, 1, 1, 10, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 11, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	3, 2, 2, 2, 2, 2, 2, 3, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	13, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 3, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 3, 
	2, 2, 2, 2, 2, 1, 1, 1, 
	1, 1, 1, 1, 12, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 3, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 3, 2, 2, 4, 3, 
	2, 4, 15, 1, 1, 0
];

var _lexer_range_lengths = [
	0, 1, 1, 0, 0, 0, 0, 1, 
	1, 1, 1, 1, 1, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	1, 1, 1, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 1, 0, 0, 0, 
	0, 0, 0, 1, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 1, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 1, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	1, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 1, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 1, 1, 0, 
	0, 1, 1, 0, 0, 0
];

var _lexer_index_offsets = [
	0, 0, 18, 35, 37, 39, 42, 45, 
	50, 55, 60, 65, 69, 73, 76, 78, 
	80, 82, 84, 86, 88, 90, 92, 94, 
	96, 98, 100, 102, 104, 106, 108, 111, 
	114, 119, 126, 131, 133, 135, 137, 139, 
	141, 143, 145, 148, 150, 152, 154, 156, 
	158, 160, 162, 164, 166, 173, 176, 179, 
	182, 185, 188, 191, 208, 210, 212, 215, 
	217, 219, 221, 223, 225, 227, 229, 231, 
	243, 246, 249, 252, 255, 258, 261, 264, 
	267, 270, 273, 276, 279, 282, 285, 288, 
	291, 294, 297, 300, 303, 306, 309, 312, 
	315, 318, 321, 324, 327, 330, 333, 336, 
	339, 342, 345, 348, 351, 354, 357, 360, 
	363, 366, 369, 372, 375, 378, 380, 382, 
	384, 386, 388, 390, 392, 394, 396, 398, 
	400, 402, 404, 406, 408, 410, 412, 425, 
	428, 431, 434, 437, 440, 443, 446, 449, 
	452, 455, 458, 461, 464, 467, 470, 473, 
	476, 479, 482, 485, 488, 491, 494, 497, 
	500, 504, 507, 510, 513, 516, 519, 522, 
	526, 529, 532, 535, 538, 541, 544, 547, 
	550, 553, 556, 559, 561, 563, 565, 567, 
	569, 571, 573, 575, 577, 579, 581, 583, 
	585, 600, 603, 606, 609, 612, 615, 618, 
	621, 624, 627, 630, 633, 636, 639, 642, 
	645, 648, 651, 654, 657, 660, 663, 666, 
	669, 672, 675, 679, 682, 685, 688, 691, 
	694, 697, 700, 703, 706, 709, 712, 715, 
	718, 721, 724, 727, 730, 733, 736, 739, 
	743, 746, 749, 752, 755, 758, 760, 762, 
	764, 766, 768, 770, 772, 786, 789, 792, 
	795, 798, 801, 804, 807, 810, 813, 816, 
	819, 822, 825, 828, 831, 834, 837, 840, 
	843, 846, 849, 852, 855, 858, 861, 865, 
	868, 871, 874, 877, 880, 883, 886, 889, 
	892, 895, 898, 901, 904, 907, 910, 913, 
	916, 919, 922, 925, 929, 932, 936, 942, 
	946, 949, 955, 972, 974, 976
];

var _lexer_indicies = [
	2, 1, 3, 4, 5, 6, 7, 8, 
	9, 10, 11, 12, 13, 14, 15, 16, 
	1, 0, 2, 1, 3, 4, 5, 6, 
	7, 8, 9, 10, 11, 12, 13, 14, 
	15, 1, 0, 17, 0, 18, 0, 20, 
	21, 19, 23, 24, 22, 27, 26, 28, 
	26, 25, 31, 30, 32, 30, 29, 31, 
	30, 33, 30, 29, 31, 30, 34, 30, 
	29, 36, 35, 35, 0, 2, 37, 37, 
	0, 39, 40, 38, 2, 0, 41, 0, 
	42, 0, 43, 0, 44, 0, 45, 0, 
	46, 0, 47, 0, 48, 0, 49, 0, 
	50, 0, 51, 0, 52, 0, 53, 0, 
	54, 0, 55, 0, 57, 58, 56, 60, 
	61, 59, 0, 0, 0, 0, 62, 63, 
	64, 63, 63, 66, 65, 62, 2, 67, 
	7, 67, 0, 68, 0, 69, 0, 70, 
	0, 71, 0, 72, 0, 73, 0, 74, 
	0, 74, 75, 0, 76, 0, 77, 0, 
	78, 0, 79, 0, 80, 0, 81, 0, 
	82, 0, 84, 83, 86, 85, 86, 87, 
	88, 89, 88, 87, 85, 86, 90, 85, 
	86, 91, 85, 86, 92, 85, 86, 93, 
	85, 86, 94, 85, 86, 95, 85, 97, 
	96, 98, 99, 100, 101, 102, 103, 104, 
	105, 106, 107, 108, 109, 110, 96, 0, 
	111, 0, 112, 0, 55, 74, 0, 113, 
	0, 114, 0, 115, 0, 116, 0, 117, 
	0, 118, 0, 120, 119, 122, 121, 122, 
	123, 124, 125, 124, 126, 127, 128, 129, 
	130, 123, 121, 122, 131, 121, 122, 132, 
	121, 122, 133, 121, 122, 134, 121, 122, 
	135, 121, 122, 136, 121, 122, 137, 121, 
	122, 138, 121, 122, 139, 121, 122, 140, 
	121, 122, 141, 121, 122, 142, 121, 122, 
	143, 121, 122, 144, 121, 122, 145, 121, 
	122, 146, 121, 122, 147, 121, 122, 148, 
	121, 122, 149, 121, 122, 150, 121, 122, 
	151, 121, 122, 152, 121, 122, 153, 121, 
	122, 154, 121, 122, 155, 121, 122, 156, 
	121, 122, 151, 121, 122, 157, 121, 122, 
	158, 121, 122, 159, 121, 122, 160, 121, 
	122, 161, 121, 122, 162, 121, 122, 163, 
	121, 122, 164, 121, 122, 165, 121, 122, 
	166, 121, 122, 167, 121, 122, 168, 121, 
	122, 169, 121, 122, 151, 121, 122, 170, 
	121, 122, 171, 121, 122, 172, 121, 122, 
	151, 121, 173, 0, 174, 0, 175, 0, 
	176, 0, 177, 0, 178, 0, 179, 0, 
	180, 0, 181, 0, 182, 0, 183, 0, 
	184, 0, 185, 0, 186, 0, 187, 0, 
	189, 188, 191, 190, 191, 192, 193, 194, 
	195, 193, 196, 197, 198, 199, 200, 192, 
	190, 191, 201, 190, 191, 202, 190, 191, 
	203, 190, 191, 204, 190, 191, 205, 190, 
	191, 206, 190, 191, 207, 190, 191, 208, 
	190, 191, 209, 190, 191, 210, 190, 191, 
	211, 190, 191, 212, 190, 191, 213, 190, 
	191, 214, 190, 191, 215, 190, 191, 216, 
	190, 191, 217, 190, 191, 218, 190, 191, 
	219, 190, 191, 220, 190, 191, 221, 190, 
	191, 222, 190, 191, 222, 190, 191, 223, 
	190, 191, 224, 190, 191, 215, 222, 190, 
	191, 225, 190, 191, 226, 190, 191, 227, 
	190, 191, 228, 190, 191, 229, 190, 191, 
	215, 190, 191, 230, 231, 190, 191, 221, 
	190, 191, 232, 190, 191, 233, 190, 191, 
	234, 190, 191, 235, 190, 191, 236, 190, 
	191, 237, 190, 191, 238, 190, 191, 239, 
	190, 191, 229, 190, 240, 241, 0, 73, 
	0, 242, 0, 243, 0, 244, 0, 245, 
	0, 246, 0, 247, 0, 248, 0, 249, 
	0, 250, 0, 251, 0, 253, 252, 255, 
	254, 255, 256, 257, 258, 259, 257, 260, 
	261, 262, 263, 264, 265, 266, 256, 254, 
	255, 267, 254, 255, 268, 254, 255, 269, 
	254, 255, 270, 254, 255, 271, 254, 255, 
	272, 254, 255, 273, 254, 255, 274, 254, 
	255, 275, 254, 255, 276, 254, 255, 277, 
	254, 255, 278, 254, 255, 279, 254, 255, 
	280, 254, 255, 281, 254, 255, 282, 254, 
	255, 283, 254, 255, 284, 254, 255, 285, 
	254, 255, 286, 254, 255, 287, 254, 255, 
	288, 254, 255, 288, 254, 255, 289, 254, 
	255, 290, 254, 255, 281, 288, 254, 255, 
	291, 254, 255, 292, 254, 255, 293, 254, 
	255, 294, 254, 255, 295, 254, 255, 281, 
	254, 255, 296, 254, 255, 297, 254, 255, 
	298, 254, 255, 299, 254, 255, 300, 254, 
	255, 301, 254, 255, 302, 254, 255, 303, 
	254, 255, 304, 254, 255, 305, 254, 255, 
	306, 254, 255, 307, 254, 255, 308, 254, 
	255, 295, 254, 255, 309, 300, 254, 255, 
	287, 254, 255, 310, 254, 255, 311, 254, 
	255, 312, 254, 255, 295, 254, 313, 0, 
	314, 0, 315, 0, 316, 0, 317, 0, 
	319, 318, 321, 320, 321, 322, 323, 324, 
	325, 323, 326, 327, 328, 329, 330, 331, 
	322, 320, 321, 332, 320, 321, 333, 320, 
	321, 334, 320, 321, 335, 320, 321, 336, 
	320, 321, 337, 320, 321, 338, 320, 321, 
	339, 320, 321, 340, 320, 321, 341, 320, 
	321, 342, 320, 321, 343, 320, 321, 344, 
	320, 321, 345, 320, 321, 346, 320, 321, 
	347, 320, 321, 348, 320, 321, 349, 320, 
	321, 350, 320, 321, 351, 320, 321, 352, 
	320, 321, 353, 320, 321, 353, 320, 321, 
	354, 320, 321, 355, 320, 321, 346, 353, 
	320, 321, 356, 320, 321, 357, 320, 321, 
	358, 320, 321, 359, 320, 321, 360, 320, 
	321, 346, 320, 321, 361, 320, 321, 362, 
	320, 321, 363, 320, 321, 364, 320, 321, 
	365, 320, 321, 366, 320, 321, 367, 320, 
	321, 368, 320, 321, 369, 320, 321, 370, 
	320, 321, 371, 320, 321, 372, 320, 321, 
	373, 320, 321, 360, 320, 321, 374, 365, 
	320, 321, 352, 320, 375, 376, 375, 0, 
	379, 378, 380, 381, 378, 377, 0, 383, 
	384, 382, 0, 383, 382, 379, 385, 383, 
	384, 385, 382, 379, 386, 387, 388, 389, 
	390, 391, 392, 393, 394, 395, 396, 397, 
	398, 399, 386, 0, 400, 0, 1, 0, 
	401, 0
];

var _lexer_trans_targs = [
	0, 2, 2, 3, 13, 15, 29, 32, 
	35, 42, 60, 63, 117, 178, 245, 301, 
	307, 4, 5, 6, 7, 6, 6, 7, 
	6, 8, 8, 8, 9, 8, 8, 8, 
	9, 10, 11, 12, 2, 12, 13, 2, 
	14, 16, 17, 18, 19, 20, 21, 22, 
	23, 24, 25, 26, 27, 28, 309, 30, 
	31, 2, 14, 31, 2, 14, 33, 34, 
	2, 33, 32, 34, 36, 37, 38, 39, 
	40, 41, 29, 43, 44, 45, 46, 47, 
	48, 49, 50, 51, 52, 51, 52, 52, 
	2, 53, 54, 55, 56, 57, 58, 59, 
	2, 2, 3, 13, 15, 29, 32, 35, 
	42, 60, 63, 117, 178, 245, 301, 61, 
	62, 64, 65, 66, 67, 68, 69, 70, 
	71, 70, 71, 71, 2, 72, 86, 94, 
	99, 103, 113, 73, 74, 75, 76, 77, 
	78, 79, 80, 81, 82, 83, 84, 85, 
	2, 87, 88, 89, 90, 91, 92, 93, 
	59, 95, 96, 97, 98, 100, 101, 102, 
	103, 104, 105, 106, 107, 108, 109, 110, 
	111, 112, 114, 115, 116, 118, 119, 120, 
	121, 122, 123, 124, 125, 126, 127, 128, 
	129, 130, 131, 132, 133, 134, 133, 134, 
	134, 2, 135, 149, 150, 157, 158, 161, 
	167, 136, 137, 138, 139, 140, 141, 142, 
	143, 144, 145, 146, 147, 148, 2, 59, 
	151, 152, 153, 154, 155, 156, 149, 159, 
	160, 162, 163, 164, 165, 166, 168, 169, 
	170, 171, 172, 173, 174, 175, 176, 177, 
	179, 180, 181, 182, 183, 184, 185, 186, 
	187, 188, 189, 190, 191, 192, 191, 192, 
	192, 2, 193, 207, 208, 215, 216, 219, 
	225, 239, 241, 194, 195, 196, 197, 198, 
	199, 200, 201, 202, 203, 204, 205, 206, 
	2, 59, 209, 210, 211, 212, 213, 214, 
	207, 217, 218, 220, 221, 222, 223, 224, 
	226, 227, 228, 229, 230, 231, 232, 233, 
	234, 235, 236, 237, 238, 240, 242, 243, 
	244, 246, 247, 248, 249, 250, 251, 252, 
	251, 252, 252, 2, 253, 267, 268, 275, 
	276, 279, 285, 299, 254, 255, 256, 257, 
	258, 259, 260, 261, 262, 263, 264, 265, 
	266, 2, 59, 269, 270, 271, 272, 273, 
	274, 267, 277, 278, 280, 281, 282, 283, 
	284, 286, 287, 288, 289, 290, 291, 292, 
	293, 294, 295, 296, 297, 298, 300, 301, 
	302, 303, 305, 306, 304, 302, 303, 304, 
	302, 305, 306, 3, 13, 15, 29, 32, 
	35, 42, 60, 63, 117, 178, 245, 301, 
	308, 0
];

var _lexer_trans_actions = [
	43, 0, 54, 3, 1, 0, 29, 1, 
	29, 29, 29, 29, 29, 29, 29, 35, 
	0, 0, 0, 7, 139, 48, 0, 102, 
	9, 5, 45, 134, 45, 0, 33, 122, 
	33, 33, 0, 11, 106, 0, 0, 114, 
	25, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	57, 149, 126, 0, 110, 23, 0, 27, 
	118, 27, 51, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 57, 144, 0, 54, 0, 
	81, 84, 0, 0, 0, 0, 0, 21, 
	31, 130, 60, 57, 31, 63, 57, 63, 
	63, 63, 63, 63, 63, 63, 66, 0, 
	0, 0, 0, 0, 0, 0, 0, 57, 
	144, 0, 54, 0, 69, 33, 84, 84, 
	84, 84, 84, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	13, 0, 0, 0, 0, 0, 0, 0, 
	13, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 57, 144, 0, 54, 
	0, 78, 33, 84, 84, 84, 84, 84, 
	84, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 19, 19, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 57, 144, 0, 54, 
	0, 75, 33, 84, 84, 84, 84, 84, 
	84, 84, 84, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	17, 17, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 57, 144, 
	0, 54, 0, 72, 33, 84, 84, 84, 
	84, 84, 84, 84, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 15, 15, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 37, 37, 54, 37, 87, 0, 0, 
	39, 0, 0, 93, 90, 41, 96, 90, 
	96, 96, 96, 96, 96, 96, 96, 99, 
	0, 0
];

var _lexer_eof_actions = [
	0, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43, 43, 43, 
	43, 43, 43, 43, 43, 43
];

var lexer_start = 1;
var lexer_first_final = 309;
var lexer_error = 0;

var lexer_en_main = 1;


/* line 129 "ragel/i18n/et.js.rl" */

/* line 130 "ragel/i18n/et.js.rl" */

/* line 131 "ragel/i18n/et.js.rl" */

/* line 132 "ragel/i18n/et.js.rl" */

var Lexer = function(listener) {
  // Check that listener has the required functions
  var events = ['comment', 'tag', 'feature', 'background', 'scenario', 'scenario_outline', 'examples', 'step', 'doc_string', 'row', 'eof'];
  for(var i=0, len=events.length; i<len; i++) {
    var event = events[i];
    if(typeof listener[event] != 'function') {
      throw new Error("Error. No " + event + " function exists on " + JSON.stringify(listener));
    }
  }
  this.listener = listener;
};

Lexer.prototype.scan = function(data) {
  var ending = "\n%_FEATURE_END_%";
  if(typeof data == 'string') {
    data = this.stringToBytes(data + ending);
  } else if(typeof Buffer != 'undefined' && Buffer.isBuffer(data)) {
    // Node.js
    var buf = new Buffer(data.length + ending.length);
    data.copy(buf, 0, 0);
    new Buffer(ending).copy(buf, data.length, 0);
    data = buf;
  }
  var eof = pe = data.length;
  var p = 0;

  this.line_number = 1;
  this.last_newline = 0;
  var signedCharValue=function(v){return v > 127 ? v-256 : v; };

  
/* line 615 "js/lib/gherkin/lexer/et.js" */
{
	  this.cs = lexer_start;
} /* JSCodeGen::writeInit */

/* line 164 "ragel/i18n/et.js.rl" */
  
/* line 622 "js/lib/gherkin/lexer/et.js" */
{
	var _klen, _trans, _keys, _ps, _widec, _acts, _nacts;
	var _goto_level, _resume, _eof_trans, _again, _test_eof;
	var _out;
	_klen = _trans = _keys = _acts = _nacts = null;
	_goto_level = 0;
	_resume = 10;
	_eof_trans = 15;
	_again = 20;
	_test_eof = 30;
	_out = 40;
	while (true) {
	_trigger_goto = false;
	if (_goto_level <= 0) {
	if (p == pe) {
		_goto_level = _test_eof;
		continue;
	}
	if ( this.cs == 0) {
		_goto_level = _out;
		continue;
	}
	}
	if (_goto_level <= _resume) {
	_keys = _lexer_key_offsets[ this.cs];
	_trans = _lexer_index_offsets[ this.cs];
	_klen = _lexer_single_lengths[ this.cs];
	_break_match = false;
	
	do {
	  if (_klen > 0) {
	     _lower = _keys;
	     _upper = _keys + _klen - 1;

	     while (true) {
	        if (_upper < _lower) { break; }
	        _mid = _lower + ( (_upper - _lower) >> 1 );

	        if (( signedCharValue(data[p])) < _lexer_trans_keys[_mid]) {
	           _upper = _mid - 1;
	        } else if (( signedCharValue(data[p])) > _lexer_trans_keys[_mid]) {
	           _lower = _mid + 1;
	        } else {
	           _trans += (_mid - _keys);
	           _break_match = true;
	           break;
	        };
	     } /* while */
	     if (_break_match) { break; }
	     _keys += _klen;
	     _trans += _klen;
	  }
	  _klen = _lexer_range_lengths[ this.cs];
	  if (_klen > 0) {
	     _lower = _keys;
	     _upper = _keys + (_klen << 1) - 2;
	     while (true) {
	        if (_upper < _lower) { break; }
	        _mid = _lower + (((_upper-_lower) >> 1) & ~1);
	        if (( signedCharValue(data[p])) < _lexer_trans_keys[_mid]) {
	          _upper = _mid - 2;
	         } else if (( signedCharValue(data[p])) > _lexer_trans_keys[_mid+1]) {
	          _lower = _mid + 2;
	        } else {
	          _trans += ((_mid - _keys) >> 1);
	          _break_match = true;
	          break;
	        }
	     } /* while */
	     if (_break_match) { break; }
	     _trans += _klen
	  }
	} while (false);
	_trans = _lexer_indicies[_trans];
	 this.cs = _lexer_trans_targs[_trans];
	if (_lexer_trans_actions[_trans] != 0) {
		_acts = _lexer_trans_actions[_trans];
		_nacts = _lexer_actions[_acts];
		_acts += 1;
		while (_nacts > 0) {
			_nacts -= 1;
			_acts += 1;
			switch (_lexer_actions[_acts - 1]) {
case 0:
/* line 6 "ragel/i18n/et.js.rl" */

    this.content_start = p;
    this.current_line = this.line_number;
    this.start_col = p - this.last_newline - (this.keyword+':').length;
  		break;
case 1:
/* line 12 "ragel/i18n/et.js.rl" */

    this.current_line = this.line_number;
    this.start_col = p - this.last_newline;
  		break;
case 2:
/* line 17 "ragel/i18n/et.js.rl" */

    this.content_start = p;
  		break;
case 3:
/* line 21 "ragel/i18n/et.js.rl" */

    this.docstring_content_type_start = p;
  		break;
case 4:
/* line 25 "ragel/i18n/et.js.rl" */

    this.docstring_content_type_end = p;
  		break;
case 5:
/* line 29 "ragel/i18n/et.js.rl" */

    var con = this.unindent(
      this.start_col, 
      this.bytesToString(data.slice(this.content_start, this.next_keyword_start-1)).replace(/(\r?\n)?([\t ])*$/, '').replace(/\\\"\\\"\\\"/mg, '"""')
    );
    var con_type = this.bytesToString(data.slice(this.docstring_content_type_start, this.docstring_content_type_end)).trim();
    this.listener.doc_string(con_type, con, this.current_line); 
  		break;
case 6:
/* line 38 "ragel/i18n/et.js.rl" */

    p = this.store_keyword_content('feature', data, p, eof);
  		break;
case 7:
/* line 42 "ragel/i18n/et.js.rl" */

    p = this.store_keyword_content('background', data, p, eof);
  		break;
case 8:
/* line 46 "ragel/i18n/et.js.rl" */

    p = this.store_keyword_content('scenario', data, p, eof);
  		break;
case 9:
/* line 50 "ragel/i18n/et.js.rl" */

    p = this.store_keyword_content('scenario_outline', data, p, eof);
  		break;
case 10:
/* line 54 "ragel/i18n/et.js.rl" */

    p = this.store_keyword_content('examples', data, p, eof);
  		break;
case 11:
/* line 58 "ragel/i18n/et.js.rl" */

    var con = this.bytesToString(data.slice(this.content_start, p)).trim();
    this.listener.step(this.keyword, con, this.current_line);
  		break;
case 12:
/* line 63 "ragel/i18n/et.js.rl" */

    var con = this.bytesToString(data.slice(this.content_start, p)).trim();
    this.listener.comment(con, this.line_number);
    this.keyword_start = null;
  		break;
case 13:
/* line 69 "ragel/i18n/et.js.rl" */

    var con = this.bytesToString(data.slice(this.content_start, p)).trim();
    this.listener.tag(con, this.line_number);
    this.keyword_start = null;
  		break;
case 14:
/* line 75 "ragel/i18n/et.js.rl" */

    this.line_number++;
  		break;
case 15:
/* line 79 "ragel/i18n/et.js.rl" */

    this.last_newline = p + 1;
  		break;
case 16:
/* line 83 "ragel/i18n/et.js.rl" */

    this.keyword_start = this.keyword_start || p;
  		break;
case 17:
/* line 87 "ragel/i18n/et.js.rl" */

    this.keyword = this.bytesToString(data.slice(this.keyword_start, p)).replace(/:$/, '');
    this.keyword_start = null;
  		break;
case 18:
/* line 92 "ragel/i18n/et.js.rl" */

    this.next_keyword_start = p;
  		break;
case 19:
/* line 96 "ragel/i18n/et.js.rl" */

    p = p - 1;
    current_row = [];
    this.current_line = this.line_number;
  		break;
case 20:
/* line 102 "ragel/i18n/et.js.rl" */

    this.content_start = p;
  		break;
case 21:
/* line 106 "ragel/i18n/et.js.rl" */

    var con = this.bytesToString(data.slice(this.content_start, p)).trim();
    current_row.push(con.replace(/\\\|/, "|").replace(/\\n/, "\n").replace(/\\\\/, "\\"));
  		break;
case 22:
/* line 111 "ragel/i18n/et.js.rl" */

    this.listener.row(current_row, this.current_line);
  		break;
case 23:
/* line 115 "ragel/i18n/et.js.rl" */

    if(this.cs < lexer_first_final) {
      var content = this.current_line_content(data, p);
      throw new Error("Lexing error on line " + this.line_number + ": '" + content + "'. See http://wiki.github.com/cucumber/gherkin/lexingerror for more information.");
    } else {
      this.listener.eof();
    }
    
  		break;
/* line 849 "js/lib/gherkin/lexer/et.js" */
			} /* action switch */
		}
	}
	if (_trigger_goto) {
		continue;
	}
	}
	if (_goto_level <= _again) {
	if ( this.cs == 0) {
		_goto_level = _out;
		continue;
	}
	p += 1;
	if (p != pe) {
		_goto_level = _resume;
		continue;
	}
	}
	if (_goto_level <= _test_eof) {
	if (p == eof) {
	__acts = _lexer_eof_actions[ this.cs];
	__nacts =  _lexer_actions[__acts];
	__acts += 1;
	while (__nacts > 0) {
		__nacts -= 1;
		__acts += 1;
		switch (_lexer_actions[__acts - 1]) {
case 23:
/* line 115 "ragel/i18n/et.js.rl" */

    if(this.cs < lexer_first_final) {
      var content = this.current_line_content(data, p);
      throw new Error("Lexing error on line " + this.line_number + ": '" + content + "'. See http://wiki.github.com/cucumber/gherkin/lexingerror for more information.");
    } else {
      this.listener.eof();
    }
    
  		break;
/* line 888 "js/lib/gherkin/lexer/et.js" */
		} /* eof action switch */
	}
	if (_trigger_goto) {
		continue;
	}
}
	}
	if (_goto_level <= _out) {
		break;
	}
	}
	}

/* line 165 "ragel/i18n/et.js.rl" */
};


/*
 * Decode utf-8 byte sequence to string.
 */
var decodeUtf8 = function(bytes) {
  var result = "";
  var i = 0;
  var wc;
  var c;

  while (i < bytes.length) {
    /* parse as UTF-8 lead byte */
    wc = bytes[i++];
    if (wc < 0x80) {
      count = 0;
    } else if (wc < 0xC2 || wc >= 0xF8) {
      throw new Error("input is not a valid UTF-8 lead octet");
    } else if (wc < 0xE0) {
      count = 1;
      wc = (wc & 0x1F) << 6;
    } else if (wc < 0xF0) {
      count = 2;
      wc = (wc & 0x0F) << 12;
    } else /* wc < 0xF8 */ {
      count = 3;
      wc = (wc & 0x07) << 18;
    }

    /* parse trail bytes, if any */
    while (count) {
      if (!(i < bytes.length)) {
        throw new Error("short read");
      }
      if ((c = bytes[i++] ^ 0x80) > 0x3F) {
        throw new Error("input is not a valid UTF-8 trail octet");
      }
      wc |= c << (6 * --count);
      if (wc < (1 << (5 * count + 6))) {
        throw new Error("invalid non-minimal encoded input");
      }
    }

    /* handle conversion to UTF-16 if needed */
    if (wc > 0xFFFF) {
      wc -= 0x10000;
      result += String.fromCharCode(0xD800 + (wc >> 10));
      wc = 0xDC00 + (wc & 0x3FF);
    }
    result += String.fromCharCode(wc);
  }

  return result;
};

/*
 * Encode string to an array of bytes using utf8 encoding.
 *
 * Javascript internally stores character data as utf16 (like java).
 * String.charCodeAt() does *not* produce unicode points, but simply
 * reflects this internal representation. Thus, it is necessary
 * to first decode the utf-16 representation before encoding to
 * utf-8.
 */
var encodeUtf8 = function(string) {
  var bytes = [];
  var i = 0;
  var j = 0;
  var wc;

  while (i < string.length) {
    wc = string.charCodeAt(i++);
    if (wc >= 0xD800 && wc <= 0xDBFF && i < string.length && string.charCodeAt(i) >= 0xDC00 && string.charCodeAt(i) <= 0xDFFF) {
      /* decode UTF-16 */
      wc = 0x10000 + ((wc & 0x3FF) << 10) + (string.charCodeAt(i++) & 0x3FF);
    }

    /* emit lead byte */
    if (wc < 0x80) {
      bytes[j++] = wc;
      count = 0;
    } else if (wc < 0x800) {
      bytes[j++] = 0xC0 | (wc >> 6);
      count = 1;
    } else if (wc < 0x10000) {
      bytes[j++] = 0xE0 | (wc >> 12);
      count = 2;
    } else {
      /* SMP: 21-bit Unicode */
      bytes[j++] = 0xF0 | (wc >> 18);
      count = 3;
    }

    /* emit trail bytes, if any */
    while (count) {
      bytes[j++] = 0x80 | ((wc >> (6 * --count)) & 0x3F);
    }
  }

  return bytes;

};

Lexer.prototype.bytesToString = function(bytes) {
  if(typeof bytes.write == 'function') {
    // Node.js
    return bytes.toString('utf-8');
  }
  return decodeUtf8(bytes);
};

Lexer.prototype.stringToBytes = function(string) {
  return encodeUtf8(string);
};

Lexer.prototype.unindent = function(startcol, text) {
  startcol = startcol || 0;
  return text.replace(new RegExp('^[\t ]{0,' + startcol + '}', 'gm'), ''); 
};

Lexer.prototype.store_keyword_content = function(event, data, p, eof) {
  var end_point = (!this.next_keyword_start || (p == eof)) ? p : this.next_keyword_start;
  var content = this.unindent(this.start_col + 2, this.bytesToString(data.slice(this.content_start, end_point))).replace(/\s+$/,"");
  var content_lines = content.split("\n")
  var name = content_lines.shift() || "";
  name = name.trim();
  var description = content_lines.join("\n");
  this.listener[event](this.keyword, name, description, this.current_line);
  var nks = this.next_keyword_start;
  this.next_keyword_start = null;
  return nks ? nks - 1 : p;
};

Lexer.prototype.current_line_content = function(data, p) {
  var rest = Array.prototype.slice.call(data,this.last_newline, -1);
  var end = rest.indexOf(10) || -1;
  return this.bytesToString(rest.slice(0, end)).trim();
};

// Node.js export
if(typeof module !== 'undefined') {
  module.exports = Lexer;
}
// Require.js export
if (typeof define !== 'undefined') {
  if(define.amd) {
    define('gherkin/lexer/et', [], function() {
      return Lexer;
    });
  } else {
    define('gherkin/lexer/et', function(require, exports, module) {
      exports.Lexer = Lexer;
    });
  }
}

})();
