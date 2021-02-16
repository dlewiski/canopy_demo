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
    image_url: '/images/products/solar-ecofund-product.png',
    co2_offset: '50 MT/year',
    irr: 6.52,
    management_fee: 1.5,
    cost_basis: 400,
    description: 'Solar ecoFund invests in 15 utility scale solar PV projects ranging from 15 MW to 367 MW across the United States. It is a Regulation A+ tier II offering with 10,000 shares that will be closed when it reaches $50 million.  Each solar project is operated by an independent contractor.',
    open: true,
    percent_change: 38,
    value: 118700
  },
  {
    name: 'Onshore Wind ecoFund',
    total_dollars: '50m',
    shares: 5,
    image_url: 'images/products/onshore-wind-ecofund-product.png',
    co2_offset: '71 MT/year',
    irr: 7.01,
    management_fee: 1.5,
    cost_basis: 300,
    description: 'The Onshore Wind ecoFund invests in 7 utility scale onshore wind projects ranging from 5 MW to 200 MW across the United States, France, and Germany It is a Regulation A+ tier II offering with 10,000 shares that will be closed when it reaches $50 million.  Each project is operated by an independent contractor.',
    open: true,
    percent_change: 42,
    value: 40000
  },
    {
    name: 'Offshore Wind ecoFund',
    total_dollars: '50m',
    shares: 10,
    image_url: 'images/products/onshore-wind-ecofund-product.png',
    co2_offset: '88 MT/year',
    irr: 9.23,
    management_fee: 1.5,
    cost_basis: 300,
    description: 'The Offshore Wind ecoFund invests in 5 utility scale offshore wind projects ranging from 5 MW to 200 MW across Europe. It is a Regulation A+ tier II offering with 10,000 shares that will be closed when it reaches $50 million.  Each project is operated by an independent contractor.',
    open: true,
    percent_change: 79,
    value: 15000
  },
  {
    name: 'Solar ETF (SOLR)',
    total_dollars: '47m',
    shares: 11,
    image_url: '/images/products/solar-etf-product.jpg',
    co2_offset: '45 MT/year',
    irr: 7.18,
    management_fee: 1.5,
    cost_basis: 118.7,
    description: 'Solar ecoFund invests in 15 utility scale solar PV projects ranging from 15 MW to 367 MW across the United States. It is a Regulation A+ tier II offering with 10,000 shares that will be closed when it reaches $50 million.  Each solar project is operated by an independent contractor.',
    open: true,
    percent_change: -0.43,
    value: 30000
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
    image_url: '/images/projects/heartland-project.png',
    product: products.first
  },
  {
    location: 'Mojave, CA ',
    energy_amount: 45,
    units: 'MW',
    cod_date: '03/14/2017',
    irr: 4.4,
    operator: 'SD&E, PG&E',
    image_url: '/images/projects/mojave-project.png',
    product: products.first
  },
  {
    location: 'Phoenix, AZ ',
    energy_amount: 200,
    units: 'MW',
    cod_date: '04/2021',
    irr: 8.8,
    operator: 'TBC',
    image_url: '/images/projects/phoenix-project.png',
    product: products.first
  },
  {
    location: 'Ojai, CA',
    energy_amount: 18,
    units: 'MW',
    cod_date: '03/14/2017',
    irr: 4.4,
    operator: 'SD&E, PG&E',
    image_url: '/images/projects/mojave-project.png',
    product: products.first
  },
  {
    location: 'Portlan, OR',
    energy_amount: 100,
    units: 'MW',
    cod_date: '04/2021',
    irr: 8.8,
    operator: 'TBC',
    image_url: '/images/projects/phoenix-project.png',
    product: products.first
  },
  {
    location: 'Altamont, CA',
    energy_amount: 45,
    units: 'MW',
    cod_date: '01/04/2014',
    irr: 5.6,
    operator: 'Sunwest, LLC',
    image_url: '/images/projects/heartland-project.png',
    product: Product.find_by(name: "Onshore Wind ecoFund")
  },
  {
    location: 'Nolan, TX',
    energy_amount: 200,
    units: 'MW',
    cod_date: '01/04/2014',
    irr: 5.6,
    operator: 'Sunwest, LLC',
    image_url: '/images/projects/heartland-project.png',
    product: Product.find_by(name: "Onshore Wind ecoFund")
  },
  {
    location: 'Sterling County, TX',
    energy_amount: 120,
    units: 'MW',
    cod_date: '01/04/2014',
    irr: 5.6,
    operator: 'Sunwest, LLC',
    image_url: '/images/projects/heartland-project.png',
    product: Product.find_by(name: "Onshore Wind ecoFund")
  },
  {
    location: 'Schleswig-Holstein, Germany',
    energy_amount: 100,
    units: 'MW',
    cod_date: '01/04/2014',
    irr: 5.6,
    operator: 'Sunwest, LLC',
    image_url: '/images/projects/heartland-project.png',
    product: Product.find_by(name: "Onshore Wind ecoFund")
  },
  {
    location: 'Ternois Sud, France',
    energy_amount: 72,
    units: 'MW',
    cod_date: '01/04/2014',
    irr: 5.6,
    operator: 'Sunwest, LLC',
    image_url: '/images/projects/heartland-project.png',
    product: Product.find_by(name: "Onshore Wind ecoFund")
  },
  {
    location: 'Floatgen, France',
    energy_amount: 75,
    units: 'MW',
    cod_date: '01/04/2014',
    irr: 5.6,
    operator: 'Sunwest, LLC',
    image_url: '/images/projects/heartland-project.png',
    product: Product.find_by(name: "Offshore Wind ecoFund")
  },
  {
    location: 'Baltic Sea, Denmark',
    energy_amount: 50,
    units: 'MW',
    cod_date: '01/04/2014',
    irr: 5.6,
    operator: 'Sunwest, LLC',
    image_url: '/images/projects/heartland-project.png',
    product: Product.find_by(name: "Offshore Wind ecoFund")
  },
  {
    location: 'Hywind Tampen, Norway',
    energy_amount: 120,
    units: 'MW',
    cod_date: '01/04/2014',
    irr: 5.6,
    operator: 'Sunwest, LLC',
    image_url: '/images/projects/heartland-project.png',
    product: Product.find_by(name: "Offshore Wind ecoFund")
  },
  {
    location: 'Hywind Scotlant, UK',
    energy_amount: 100,
    units: 'MW',
    cod_date: '01/04/2014',
    irr: 5.6,
    operator: 'Sunwest, LLC',
    image_url: '/images/projects/heartland-project.png',
    product: Product.find_by(name: "Offshore Wind ecoFund")
  },
  {
    location: 'EolMed, France',
    energy_amount: 85,
    units: 'MW',
    cod_date: '01/04/2014',
    irr: 5.6,
    operator: 'Sunwest, LLC',
    image_url: '/images/projects/heartland-project.png',
    product: Product.find_by(name: "Offshore Wind ecoFund")
  }
])