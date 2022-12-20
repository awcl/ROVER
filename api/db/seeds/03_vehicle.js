/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('vehicle').del()
  await knex('vehicle').insert([
    { id: 1, vehicle_type: 'van', miles: 63400, plate_number: 'G34989', description: '8 passenger van', location: 'P67-1', organization_id: 1 },
    { id: 2, vehicle_type: 'truck', miles: 67421, plate_number: 'G5WYY0', description: '4 door full-size pickup', location: 'P67-3', organization_id: 2 },
    { id: 3, vehicle_type: 'sedan', miles: 68410, plate_number: 'G34779', description: '4 door full-size sedan', location: 'P61-2', organization_id: 3 },
    { id: 4, vehicle_type: '5-Ton', miles: 8410, plate_number: 'G34782', description: '5-Ton cargo vehicle', location: 'P61-3', organization_id: 1 },
    { id: 5, vehicle_type: 'HMMWV', miles: 20410, plate_number: 'G57821', description: 'High Mobility Multipurpose Wheeled Vehicle', location: 'P61-4', organization_id: 1 },
    { id: 6, vehicle_type: 'Mobilizer', miles: 20410, plate_number: 'G3478', description: 'Standard tactical trailer', location: 'P67-4', organization_id: 2 },
    { id: 7, vehicle_type: 'AMRAP', miles: 20410, plate_number: 'G3462', description: 'Standard tactical trailer', location: 'P67-5', organization_id: 2 },
    { id: 8, vehicle_type: 'Patrol Vehicle', miles: 15875, plate_number: 'G37652', description: 'Standard ole patrol vehicle', location: 'P67-6', organization_id: 2 },
    { id: 9, vehicle_type: 'Tank', miles: 8645, plate_number: 'G39438', description: 'Abrams main battle tank', location: 'P67-7', organization_id: 2 },
    { id: 10, vehicle_type: 'semi-truck', miles: 74238, plate_number: 'G38765', description: 'standard 18 wheeler', location: 'P67-8', organization_id: 2 },
    { id: 11, vehicle_type: 'land rover', miles: 12685, plate_number: 'G31225', description: 'standard land rover', location: 'P67-9', organization_id: 2 },
    { id: 12, vehicle_type: 'Forklift', miles: 20455, plate_number: 'G30023', description: 'standard Forklift', location: 'P67-10', organization_id: 2 },
    { id: 13, vehicle_type: 'SUV', miles: 60249, plate_number: 'G339986', description: '4 door full-size SUV', location: 'P67-11', organization_id: 1 }
  ]);
}

// https://asc.army.mil/web/wp-content/uploads/2018/10/Abrams_Image_WSH2020.jpg
//http://media.wbur.org/wp/2022/04/IMG_2747-1000x750.jpg
//https://hips.hearstapps.com/autoweek/assets/lr-1.jpg
//https://asc.army.mil/web/wp-content/uploads/2016/06/LCRTF.jpg
//https://media.ed.edmunds-media.com/cadillac/escalade/2023/oem/2023_cadillac_escalade_4dr-suv_premium-luxury_fq_oem_1_1280.jpg