events.listen('item.tags', function (event) {
    var items = [
        'additional_lights:al_lamp_acacia_planks',
        'additional_lights:al_lamp_birch_planks',
        'additional_lights:al_lamp_blackstone',
        'additional_lights:al_lamp_cobblestone',
        'additional_lights:al_lamp_crimson_planks',
        'additional_lights:al_lamp_dark_oak_planks',
        'additional_lights:al_lamp_diamond_block',
        'additional_lights:al_lamp_end_stone',
        'additional_lights:al_lamp_glass',
        'additional_lights:al_lamp_gold_block',
        'additional_lights:al_lamp_iron_block',
        'additional_lights:al_lamp_jungle_planks',
        'additional_lights:al_lamp_magenta_wool',
        'additional_lights:al_lamp_mossy_cobblestone',
        'additional_lights:al_lamp_nether_bricks',
        'additional_lights:al_lamp_oak_planks',
        'additional_lights:al_lamp_packed_ice',
        'additional_lights:al_lamp_pink_wool',
        'additional_lights:al_lamp_red_nether_bricks',
        'additional_lights:al_lamp_sandstone',
        'additional_lights:al_lamp_spruce_planks',
        'additional_lights:al_lamp_stone',
        'additional_lights:al_lamp_warped_planks',
        'additional_lights:al_torch_acacia_planks',
        'additional_lights:al_torch_birch_planks',
        'additional_lights:al_torch_blackstone',
        'additional_lights:al_torch_cobblestone',
        'additional_lights:al_torch_crimson_planks',
        'additional_lights:al_torch_dark_oak_planks',
        'additional_lights:al_torch_diamond_block',
        'additional_lights:al_torch_end_stone',
        'additional_lights:al_torch_end_stone_bricks',
        'additional_lights:al_torch_glass',
        'additional_lights:al_torch_gold_block',
        'additional_lights:al_torch_iron_block',
        'additional_lights:al_torch_jungle_planks',
        'additional_lights:al_torch_magenta_wool',
        'additional_lights:al_torch_mossy_cobblestone',
        'additional_lights:al_torch_mossy_stone_bricks',
        'additional_lights:al_torch_nether_bricks',
        'additional_lights:al_torch_oak_planks',
        'additional_lights:al_torch_packed_ice',
        'additional_lights:al_torch_pink_wool',
        'additional_lights:al_torch_red_nether_bricks',
        'additional_lights:al_torch_sandstone',
        'additional_lights:al_torch_smooth_stone',
        'additional_lights:al_torch_spruce_planks',
        'additional_lights:al_torch_stone',
        'additional_lights:al_torch_stone_bricks',
        'additional_lights:al_torch_warped_planks',
        'additional_lights:fire_for_fire_pit_l',
        'additional_lights:fire_for_fire_pit_s',
        'additional_lights:fire_for_standing_torch_l',
        'additional_lights:fire_for_standing_torch_s',
        'additional_lights:fire_pit_l_cobblestone',
        'additional_lights:fire_pit_l_cobblestone',
        'additional_lights:fire_pit_l_cut_sandstone',
        'additional_lights:fire_pit_l_cut_sandstone',
        'additional_lights:fire_pit_l_diamond_block',
        'additional_lights:fire_pit_l_end_stone',
        'additional_lights:fire_pit_l_end_stone',
        'additional_lights:fire_pit_l_end_stone_bricks',
        'additional_lights:fire_pit_l_end_stone_bricks',
        'additional_lights:fire_pit_l_gold_block',
        'additional_lights:fire_pit_l_iron_block',
        'additional_lights:fire_pit_l_magenta_wool',
        'additional_lights:fire_pit_l_mossy_cobblestone',
        'additional_lights:fire_pit_l_mossy_cobblestone',
        'additional_lights:fire_pit_l_mossy_stone_bricks',
        'additional_lights:fire_pit_l_mossy_stone_bricks',
        'additional_lights:fire_pit_l_nether_bricks',
        'additional_lights:fire_pit_l_packed_ice',
        'additional_lights:fire_pit_l_pink_wool',
        'additional_lights:fire_pit_l_polished_andesite',
        'additional_lights:fire_pit_l_polished_andesite',
        'additional_lights:fire_pit_l_polished_blackstone',
        'additional_lights:fire_pit_l_polished_diorite',
        'additional_lights:fire_pit_l_polished_diorite',
        'additional_lights:fire_pit_l_polished_granite',
        'additional_lights:fire_pit_l_polished_granite',
        'additional_lights:fire_pit_l_red_nether_bricks',
        'additional_lights:fire_pit_l_sandstone',
        'additional_lights:fire_pit_l_sandstone',
        'additional_lights:fire_pit_l_smooth_stone',
        'additional_lights:fire_pit_l_smooth_stone',
        'additional_lights:fire_pit_l_stone',
        'additional_lights:fire_pit_l_stone',
        'additional_lights:fire_pit_l_stone_bricks',
        'additional_lights:fire_pit_l_stone_bricks',
        'additional_lights:fire_pit_s_cobblestone',
        'additional_lights:fire_pit_s_cut_sandstone',
        'additional_lights:fire_pit_s_diamond_block',
        'additional_lights:fire_pit_s_end_stone',
        'additional_lights:fire_pit_s_end_stone_bricks',
        'additional_lights:fire_pit_s_gold_block',
        'additional_lights:fire_pit_s_iron_block',
        'additional_lights:fire_pit_s_magenta_wool',
        'additional_lights:fire_pit_s_magenta_wool',
        'additional_lights:fire_pit_s_mossy_cobblestone',
        'additional_lights:fire_pit_s_mossy_stone_bricks',
        'additional_lights:fire_pit_s_nether_bricks',
        'additional_lights:fire_pit_s_packed_ice',
        'additional_lights:fire_pit_s_pink_wool',
        'additional_lights:fire_pit_s_polished_andesite',
        'additional_lights:fire_pit_s_polished_blackstone',
        'additional_lights:fire_pit_s_polished_diorite',
        'additional_lights:fire_pit_s_polished_granite',
        'additional_lights:fire_pit_s_red_nether_bricks',
        'additional_lights:fire_pit_s_sandstone',
        'additional_lights:fire_pit_s_smooth_stone',
        'additional_lights:fire_pit_s_stone',
        'additional_lights:fire_pit_s_stone_bricks',
        'additional_lights:soul_fire_for_fire_pit_l',
        'additional_lights:soul_fire_for_fire_pit_s',
        'additional_lights:soul_fire_for_standing_torch_l',
        'additional_lights:soul_fire_for_standing_torch_s',
        'additional_lights:standing_torch_l_cobblestone',
        'additional_lights:standing_torch_l_cut_sandstone',
        'additional_lights:standing_torch_l_diamond_block',
        'additional_lights:standing_torch_l_end_stone',
        'additional_lights:standing_torch_l_end_stone_bricks',
        'additional_lights:standing_torch_l_gold_block',
        'additional_lights:standing_torch_l_iron_block',
        'additional_lights:standing_torch_l_magenta_wool',
        'additional_lights:standing_torch_l_mossy_cobblestone',
        'additional_lights:standing_torch_l_mossy_stone_bricks',
        'additional_lights:standing_torch_l_nether_bricks',
        'additional_lights:standing_torch_l_packed_ice',
        'additional_lights:standing_torch_l_pink_wool',
        'additional_lights:standing_torch_l_polished_andesite',
        'additional_lights:standing_torch_l_polished_blackstone',
        'additional_lights:standing_torch_l_polished_diorite',
        'additional_lights:standing_torch_l_polished_granite',
        'additional_lights:standing_torch_l_red_nether_bricks',
        'additional_lights:standing_torch_l_sandstone',
        'additional_lights:standing_torch_l_smooth_stone',
        'additional_lights:standing_torch_l_stone',
        'additional_lights:standing_torch_l_stone_bricks',
        'additional_lights:standing_torch_s_cobblestone',
        'additional_lights:standing_torch_s_cut_sandstone',
        'additional_lights:standing_torch_s_diamond_block',
        'additional_lights:standing_torch_s_end_stone',
        'additional_lights:standing_torch_s_end_stone_bricks',
        'additional_lights:standing_torch_s_gold_block',
        'additional_lights:standing_torch_s_iron_block',
        'additional_lights:standing_torch_s_magenta_wool',
        'additional_lights:standing_torch_s_mossy_cobblestone',
        'additional_lights:standing_torch_s_mossy_stone_bricks',
        'additional_lights:standing_torch_s_nether_bricks',
        'additional_lights:standing_torch_s_packed_ice',
        'additional_lights:standing_torch_s_pink_wool',
        'additional_lights:standing_torch_s_polished_andesite',
        'additional_lights:standing_torch_s_polished_blackstone',
        'additional_lights:standing_torch_s_polished_diorite',
        'additional_lights:standing_torch_s_polished_granite',
        'additional_lights:standing_torch_s_red_nether_bricks',
        'additional_lights:standing_torch_s_sandstone',
        'additional_lights:standing_torch_s_smooth_stone',
        'additional_lights:standing_torch_s_stone',
        'additional_lights:standing_torch_s_stone_bricks',

        'astralsorcery:illumination_powder',
        'astralsorcery:illumination_wand',
        'astralsorcery:illuminator',

        'bloodmagic:bloodlightsigil',

        'botania:bifrost_pane',
        'botania:bifrost_perm',
        'botania:black_floating_flower',
        'botania:black_mushroom',
        'botania:black_shiny_flower',
        'botania:blaze_block',
        'botania:blue_floating_flower',
        'botania:blue_mushroom',
        'botania:blue_shiny_flower',
        'botania:brown_floating_flower',
        'botania:brown_mushroom',
        'botania:brown_shiny_flower',
        'botania:cyan_floating_flower',
        'botania:cyan_mushroom',
        'botania:cyan_shiny_flower',
        'botania:elf_glass',
        'botania:elf_glass_pane',
        'botania:glimmering_dreamwood',
        'botania:glimmering_livingwood',
        'botania:gray_floating_flower',
        'botania:gray_mushroom',
        'botania:gray_shiny_flower',
        'botania:green_floating_flower',
        'botania:green_mushroom',
        'botania:green_shiny_flower',
        'botania:light_blue_floating_flower',
        'botania:light_blue_mushroom',
        'botania:light_blue_shiny_flower',
        'botania:light_gray_floating_flower',
        'botania:light_gray_mushroom',
        'botania:light_gray_shiny_flower',
        'botania:lime_floating_flower',
        'botania:lime_mushroom',
        'botania:lime_shiny_flower',
        'botania:magenta_floating_flower',
        'botania:magenta_mushroom',
        'botania:magenta_shiny_flower',
        'botania:mana_glass',
        'botania:mana_glass_pane',
        'botania:orange_floating_flower',
        'botania:orange_mushroom',
        'botania:orange_shiny_flower',
        'botania:pink_floating_flower',
        'botania:pink_mushroom',
        'botania:pink_shiny_flower',
        'botania:purple_floating_flower',
        'botania:purple_mushroom',
        'botania:purple_shiny_flower',
        'botania:red_floating_flower',
        'botania:red_mushroom',
        'botania:red_shiny_flower',
        'botania:white_floating_flower',
        'botania:white_mushroom',
        'botania:white_shiny_flower',
        'botania:yellow_floating_flower',
        'botania:yellow_mushroom',
        'botania:yellow_shiny_flower',

        'buildersaddition:candle',
        'buildersaddition:large_candle',
        'buildersaddition:large_soul_candle',
        'buildersaddition:soul_candle',

        'byg:blue_glowcane',
        'byg:blue_glowcane_block',
        'byg:blue_glowshroom',
        'byg:blue_glowshroom_block',
        'byg:boric_campfire',
        'byg:glowstone_lamp',
        'byg:glowstone_lantern',
        'byg:pink_glowcane',
        'byg:pink_glowcane_block',
        'byg:purple_glowcane',
        'byg:purple_glowcane_block',
        'byg:purple_glowshroom',
        'byg:purple_glowshroom_block',
        'byg:red_glowcane',
        'byg:red_glowcane_block',
        'byg:red_glowshroom_stem',
        'byg:therium_lamp',
        'byg:therium_lantern',
        'byg:yellow_glowshroom_stem',

        'decorative_blocks:brazier',
        'decorative_blocks:chandelier',
        'decorative_blocks:soul_brazier',
        'decorative_blocks:soul_chandelier',

        'eidolon:candle',
        'eidolon:candlestick',

        'embellishcraft:black_table_lamp',
        'embellishcraft:blue_table_lamp',
        'embellishcraft:brown_table_lamp',
        'embellishcraft:cyan_table_lamp',
        'embellishcraft:gray_table_lamp',
        'embellishcraft:green_table_lamp',
        'embellishcraft:light_blue_table_lamp',
        'embellishcraft:light_gray_table_lamp',
        'embellishcraft:lime_table_lamp',
        'embellishcraft:magenta_table_lamp',
        'embellishcraft:orange_table_lamp',
        'embellishcraft:pink_table_lamp',
        'embellishcraft:purple_table_lamp',
        'embellishcraft:red_table_lamp',
        'embellishcraft:white_table_lamp',
        'embellishcraft:yellow_table_lamp',

        'engineersdecor:iron_bulb_light',
        'engineersdecor:iron_ceiling_edge_light',
        'engineersdecor:iron_floor_edge_light',
        'engineersdecor:iron_inset_light',

        'immersiveengineering:electric_lantern',
        'immersiveengineering:floodlight',
        'immersiveengineering:lantern',

        'minecraft:beacon',
        'minecraft:campfire',
        'minecraft:end_rod',
        'minecraft:glowstone',
        'minecraft:jack_o_lantern',
        'minecraft:lantern',
        'minecraft:lava_bucket',
        'minecraft:magma_block',
        'minecraft:redstone_lamp',
        'minecraft:redstone_torch',
        'minecraft:sea_lantern',
        'minecraft:soul_campfire',
        'minecraft:soul_lantern',
        'minecraft:soul_torch',
        'minecraft:torch',

        'naturesaura:light_staff',
        'naturesaura:spawn_lamp',

        'occultism:candle_white',

        'pneumaticcraft:kerosene_lamp',
        'pneumaticcraft:wall_lamp_black',
        'pneumaticcraft:wall_lamp_blue',
        'pneumaticcraft:wall_lamp_brown',
        'pneumaticcraft:wall_lamp_cyan',
        'pneumaticcraft:wall_lamp_gray',
        'pneumaticcraft:wall_lamp_green',
        'pneumaticcraft:wall_lamp_inverted_black',
        'pneumaticcraft:wall_lamp_inverted_blue',
        'pneumaticcraft:wall_lamp_inverted_brown',
        'pneumaticcraft:wall_lamp_inverted_cyan',
        'pneumaticcraft:wall_lamp_inverted_gray',
        'pneumaticcraft:wall_lamp_inverted_green',
        'pneumaticcraft:wall_lamp_inverted_light_blue',
        'pneumaticcraft:wall_lamp_inverted_light_gray',
        'pneumaticcraft:wall_lamp_inverted_lime',
        'pneumaticcraft:wall_lamp_inverted_magenta',
        'pneumaticcraft:wall_lamp_inverted_orange',
        'pneumaticcraft:wall_lamp_inverted_pink',
        'pneumaticcraft:wall_lamp_inverted_purple',
        'pneumaticcraft:wall_lamp_inverted_red',
        'pneumaticcraft:wall_lamp_inverted_white',
        'pneumaticcraft:wall_lamp_inverted_yellow',
        'pneumaticcraft:wall_lamp_light_blue',
        'pneumaticcraft:wall_lamp_light_gray',
        'pneumaticcraft:wall_lamp_lime',
        'pneumaticcraft:wall_lamp_magenta',
        'pneumaticcraft:wall_lamp_orange',
        'pneumaticcraft:wall_lamp_pink',
        'pneumaticcraft:wall_lamp_purple',
        'pneumaticcraft:wall_lamp_red',
        'pneumaticcraft:wall_lamp_white',
        'pneumaticcraft:wall_lamp_yellow',

        'quark:black_candle',
        'quark:blaze_lantern',
        'quark:blue_candle',
        'quark:brown_candle',
        'quark:cyan_candle',
        'quark:duskbound_lantern',
        'quark:elder_sea_lantern',
        'quark:gray_candle',
        'quark:green_candle',
        'quark:light_blue_candle',
        'quark:light_gray_candle',
        'quark:lime_candle',
        'quark:lit_lamp',
        'quark:magenta_candle',
        'quark:orange_candle',
        'quark:paper_lantern',
        'quark:paper_lantern_sakura',
        'quark:pink_candle',
        'quark:purple_candle',
        'quark:red_candle',
        'quark:white_candle',
        'quark:yellow_candle',

        'rsgauges:industrial_alarm_lamp',
        'rsgauges:sensitive_glass_block',

        'simplylight:edge_light',
        'simplylight:edge_light_top',
        'simplylight:illuminant_block',
        'simplylight:illuminant_block_on',
        'simplylight:illuminant_panel',
        'simplylight:illuminant_slab',
        'simplylight:lightbulb',
        'simplylight:rodlamp',
        'simplylight:wall_lamp',

        'supplementaries:candle_holder',
        'supplementaries:candelabra',
        'supplementaries:candelabra_silver',
        'supplementaries:copper_lantern',
        'supplementaries:sconce',
        'supplementaries:sconce_green',
        'supplementaries:sconce_lever',
        'supplementaries:sconce_soul',

        'torchmaster:dreadlamp',
        'torchmaster:feral_flare_lantern',
        'torchmaster:megatorch',

        'undergarden:gloom_o_lantern',
        'undergarden:tall_shimmerweed',
        'undergarden:shimmerweed',

        'valhelsia_structures:brazier'
    ];
    event.get('forge:lights').add(items);
});
