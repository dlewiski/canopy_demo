# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_02_16_011802) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "products", force: :cascade do |t|
    t.string "name"
    t.string "total_dollars"
    t.integer "shares"
    t.string "image_url"
    t.string "co2_offset"
    t.float "irr"
    t.float "management_fee"
    t.float "cost_basis"
    t.string "description"
    t.boolean "open"
    t.float "percent_change"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "slug"
    t.integer "value"
  end

  create_table "projects", force: :cascade do |t|
    t.string "location"
    t.float "energy_amount"
    t.string "units"
    t.datetime "cod_date"
    t.float "irr"
    t.string "operator"
    t.string "image_url"
    t.bigint "product_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "slug"
    t.index ["product_id"], name: "index_projects_on_product_id"
  end

  add_foreign_key "projects", "products"
end
