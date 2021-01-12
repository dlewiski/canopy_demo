# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

products = Product.create([
  {
    name: 'Solar ecoFund',
    total_dollars: '50m',
    shares: 10,
    image_url: '',
    co2_offset: '50 MT/year',
    irr: 6.52,
    management_fee: 1.5,
    cost_basis: 400,
    description: 'Solar ecoFund invests in 15 utility scale solar PV projects ranging from 15 MW to 367 MW across the United States. It is a Regulation A+ tier II offering with 10,000 shares that will be closed when it reaches $50 million.  Each solar project is operated by an independent contractor.',
    open: true,
    percent_change: 38
  },
  {
    name: 'Onshore Wind ecoFund',
    total_dollars: '65m',
    shares: 17,
    image_url: '',
    co2_offset: '45 MT/year',
    irr: 5.22,
    management_fee: 1.5,
    cost_basis: 300,
    description: 'Solar ecoFund invests in 15 utility scale solar PV projects ranging from 15 MW to 367 MW across the United States. It is a Regulation A+ tier II offering with 10,000 shares that will be closed when it reaches $50 million.  Each solar project is operated by an independent contractor.',
    open: true,
    percent_change: 42
  },
  {
    name: 'Solar ETF (SOLR)',
    total_dollars: '47m',
    shares: 11,
    image_url: '',
    co2_offset: '45 MT/year',
    irr: 7.18,
    management_fee: 1.5,
    cost_basis: 118.7,
    description: 'Solar ecoFund invests in 15 utility scale solar PV projects ranging from 15 MW to 367 MW across the United States. It is a Regulation A+ tier II offering with 10,000 shares that will be closed when it reaches $50 million.  Each solar project is operated by an independent contractor.',
    open: true,
    percent_change: -0.43
  }
])

projects = Project.create([
  {
    location: 'Heartland, TX',
    energy_amount: 172,
    units: 'MW',
    cod_date: '01/04/2014',
    irr: 5.6,
    operator: 'Sunwest, LLC',
    image_url: '',
    product: products.first
  },
  {
    location: 'Mojave, CA ',
    energy_amount: 45,
    units: 'MW',
    cod_date: '03/14/2017',
    irr: 4.4,
    operator: 'SD&E, PG&E',
    image_url: '',
    product: products.first
  },
  {
    location: 'Phoenix, AZ ',
    energy_amount: 200,
    units: 'MW',
    cod_date: '04/2021',
    irr: 8.8,
    operator: 'TBC',
    image_url: '',
    product: products.first
  }
])