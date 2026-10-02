const today = '2026-10-02';

// Catalog details and claims come only from the supplied storefront brief.
// Descriptions intentionally point shoppers to Amazon for full product details.
export const affiliateProducts = [
  { id: 'amazon-01', name: 'Gold Heart Necklace for Women | Elegant Everyday Jewellery', price: 119, category: 'Jewellery', image: 'https://static.metricool.com/planner/202610/7188368-file-4880756321765115831.png', affiliate: 'https://link.amazon/B0aH8ImXB' },
  { id: 'amazon-02', name: 'Gold-Tone Beaded Necklace for Women | Everyday Jewellery', price: 75, category: 'Jewellery', image: 'https://static.metricool.com/planner/202610/7188368-file-342690751167683555.png', affiliate: 'https://link.amazon/B00uFCghx' },
  { id: 'amazon-03', name: 'Gold Love Necklace for Women | Elegant Everyday Jewellery', price: 79, category: 'Jewellery', image: 'https://static.metricool.com/planner/202610/7188368-file-14723623927871515027.png', affiliate: 'https://link.amazon/B04KzSi8E' },
  { id: 'amazon-04', name: 'Gold Floral Necklace for Women | Everyday Jewellery', price: 79, category: 'Jewellery', image: 'https://static.metricool.com/planner/202610/7188368-file-15079452763247041309.png', affiliate: 'https://link.amazon/B0cEahRbl' },
  { id: 'amazon-05', name: 'Silver Pendant Necklace for Women | Everyday & Ethnic Style', price: 80, category: 'Jewellery', image: 'https://static.metricool.com/planner/202610/7188368-file-1244180869560984689.png', affiliate: 'https://link.amazon/B0cAg59pq' },
  { id: 'amazon-06', name: 'Daisy Flower Necklace for Women | Fresh Everyday Style', price: 84, category: 'Jewellery', image: 'https://static.metricool.com/planner/202610/7188368-file-14902861338334030713.png', affiliate: 'https://link.amazon/B02Chdtn1' },
  { id: 'amazon-07', name: 'Swan Pendant Necklace for Women | Elegant Everyday Style', price: 90, category: 'Jewellery', image: 'https://static.metricool.com/planner/202610/7188368-file-4437692735781355799.png', affiliate: 'https://link.amazon/B08TI9BNq' },
  { id: 'amazon-08', name: 'Butterfly Friendship Necklace Set | Matching Gift for Her', price: 95, category: 'Jewellery', image: 'https://static.metricool.com/planner/202610/7188368-file-17479242961032875542.png', affiliate: 'https://link.amazon/B0ciUVYs3' },
  { id: 'amazon-09', name: 'Floral Kurti Top for Women | Trendy Everyday Style', price: 300, category: 'Clothing', image: 'https://static.metricool.com/planner/202610/7188368-file-17176566261813056021.png', affiliate: 'https://link.amazon/B02m2qwwm' },
  { id: 'amazon-10', name: 'Trendy Cutout Top for Women | Stylish Everyday Fashion', price: 849, category: 'Clothing', image: 'https://static.metricool.com/planner/202610/7188368-file-15270843025973359141.png', affiliate: 'https://link.amazon/B05Vn0srf' },
  { id: 'amazon-11', name: 'Maroon Bell Sleeve Top for Women | Trendy Everyday Style', price: 360, category: 'Clothing', image: 'https://static.metricool.com/planner/202610/7188368-file-15781132015797906445.png', affiliate: 'https://link.amazon/B03M5NBNU' },
  { id: 'amazon-12', name: 'Floral Tunic Top for Women | Fresh Everyday Style', price: 299, category: 'Clothing', image: 'https://static.metricool.com/planner/202610/7188368-file-18231856739548145039.png', affiliate: 'https://link.amazon/B08peAEJQ' },
  { id: 'amazon-13', name: 'Mustard Floral Top for Women | Trendy Everyday Style', price: 359, category: 'Clothing', image: 'https://static.metricool.com/planner/202610/7188368-file-14144375719619341617.png', affiliate: 'https://link.amazon/B0docoSDi' },
  { id: 'amazon-14', name: 'Printed Tunic Top for Women | Trendy Everyday Style', price: 199, category: 'Clothing', image: 'https://static.metricool.com/planner/202610/7188368-file-18091052653141544651.png', affiliate: 'https://link.amazon/B0gUFoehT' },
  { id: 'amazon-15', name: 'Navy Floral Top for Women | Trendy Everyday Style', price: 359, category: 'Clothing', image: 'https://static.metricool.com/planner/202610/7188368-file-5863380052271607245.png', affiliate: 'https://link.amazon/B07pqZI40' },
  { id: 'amazon-16', name: 'Pink Printed Top for Women | Elegant Everyday Style', price: 587, category: 'Clothing', image: 'https://static.metricool.com/planner/202610/7188368-file-8733942826304803700.png', affiliate: 'https://link.amazon/B02HPZe3m' },
  { id: 'amazon-17', name: 'Black Hair Band for Women | Simple Everyday Hair Accessory', price: 399, category: 'Accessories', image: 'https://static.metricool.com/planner/202610/7188368-file-18407285921231272538.png', affiliate: 'https://link.amazon/B02C36mV1' },
  { id: 'amazon-18', name: 'Hair Clip Set for Women | Cute Everyday Hair Accessories', price: 199, category: 'Accessories', image: 'https://static.metricool.com/planner/202610/7188368-file-14931825040066124074.png', affiliate: 'https://link.amazon/B01ierddm' },
  { id: 'amazon-19', name: 'Floral Gajra for Women | Elegant Traditional Hair Accessory', price: 149, category: 'Accessories', image: 'https://static.metricool.com/planner/202610/7188368-file-17546459133925402078.png', affiliate: 'https://link.amazon/B00CKO5Na' },
  { id: 'amazon-20', name: 'Tan Pointed-Toe Slingback Shoes for Women | Elegant Style', price: 474, category: 'Footwear', image: 'https://static.metricool.com/planner/202610/7188368-file-14588754016562100154.png', affiliate: 'https://link.amazon/B0fTrpEnk' },
  { id: 'amazon-21', name: 'Black Rhinestone Bow Wedge Sandals for Women | Stylish Footwear', price: 799, category: 'Footwear', image: 'https://static.metricool.com/planner/202610/7188368-file-7126862470903790543.png', affiliate: 'https://link.amazon/B01B2PFQw' },
  { id: 'amazon-22', name: 'Beige Bow Mule Shoes for Women | Elegant Everyday Footwear', price: 560, category: 'Footwear', image: 'https://static.metricool.com/planner/202610/7188368-file-14400943644128992735.png', affiliate: 'https://link.amazon/B09UbE4Q9' },
  { id: 'amazon-23', name: 'Stylish Flip Flops for Women | Everyday Fashion Footwear', price: 405, category: 'Footwear', image: 'https://static.metricool.com/planner/202610/7188368-file-5901672689720402282.png', affiliate: 'https://link.amazon/B09UbE4Q9' },
  { id: 'amazon-24', name: 'Rose Gold Slide Sandals for Women | Stylish Everyday Footwear', price: 824, category: 'Footwear', image: 'https://static.metricool.com/planner/202610/7188368-file-15807452261116247725.png', affiliate: 'https://link.amazon/B06KUvYY8' },
  { id: 'amazon-25', name: 'Cream Block Heel Sandals for Women | Elegant Everyday Style', price: 482, category: 'Footwear', image: 'https://static.metricool.com/planner/202610/7188368-file-12353190758211637818.png', affiliate: 'https://link.amazon/B071EaRfW' },
  { id: 'amazon-26', name: 'Pink Dial Silver Watch for Women | Stylish Everyday Accessory', price: 94, category: 'Watches', image: 'https://static.metricool.com/planner/202610/7188368-file-12065807724727674033.png', affiliate: 'https://link.amazon/B00AjGi5l' },
  { id: 'amazon-27', name: 'Fastrack Watch for Women | Black Dial & Green Strap', price: 895, category: 'Watches', image: 'https://static.metricool.com/planner/202610/7188368-file-4665165675436081523.png', affiliate: 'https://link.amazon/B0ePY0JgR' },
  { id: 'amazon-28', name: 'Black boAt Smartwatch | Stylish Everyday Accessory', price: 1399, category: 'Watches', image: 'https://static.metricool.com/planner/202610/7188368-file-11338779221039283502.png', affiliate: 'https://link.amazon/B04T7EoJr' },
  { id: 'amazon-29', name: 'Rose Gold Floral Watch for Women | Elegant Fashion Accessory', price: 361, category: 'Watches', image: 'https://static.metricool.com/planner/202610/7188368-file-9384588765817009906.png', affiliate: 'https://link.amazon/B0aWaWSLT' },
  { id: 'amazon-30', name: 'Elegant Rose Gold Watch for Women | Classic Everyday Style', price: 473, category: 'Watches', image: 'https://static.metricool.com/planner/202610/7188368-file-3819346778479243213.png', affiliate: 'https://link.amazon/B0bYzUMz5' }
].map((product, index) => ({
  ...product,
  originalPrice: product.price,
  description: 'See the current product details on Amazon.',
  rating: 4.8,
  inStock: true,
  featured: index < 8,
  newArrival: true,
  createdAt: today
}));
