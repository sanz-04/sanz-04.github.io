import { useState } from 'react';

type Category = 'Bread' | 'Cakes' | 'Coffee';

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState<Category>('Bread');

  return (
    <div className="pt-24 min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-heading text-5xl font-bold mb-8 text-coffee">Menu</h1>
        
        {/* Tabs */}
        <div className="flex space-x-8 border-b border-coffee/20 mb-12">
          {(['Bread', 'Cakes', 'Coffee'] as Category[]).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`pb-4 font-bold text-lg transition-colors relative ${
                activeTab === category ? 'text-caramel' : 'text-coffee/60 hover:text-coffee'
              }`}
            >
              {category}
              {activeTab === category && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-caramel rounded-t-md"></div>
              )}
            </button>
          ))}
        </div>

        {/* Menu Content */}
        <div className="space-y-16">
          {activeTab === 'Bread' && (
            <section>
              <h2 className="font-heading text-3xl font-bold mb-8 text-coffee">Our Daily Bread</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <MenuCard 
                  name="Sourdough" 
                  price="$4.50" 
                  image="https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&q=80&w=200&h=200" 
                />
                <MenuCard 
                  name="Whole Wheat" 
                  price="$3.75" 
                  image="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=200&h=200" 
                />
                <MenuCard 
                  name="Rye" 
                  price="$4.00" 
                  image="https://images.unsplash.com/photo-1595535873420-a599195b3f4a?auto=format&fit=crop&q=80&w=200&h=200" 
                />
                <MenuCard 
                  name="Multigrain Baguette" 
                  price="$2.50" 
                  image="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=200&h=200" 
                />
                <MenuCard 
                  name="Ciabatta" 
                  price="$3.00" 
                  image="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=200&h=200" 
                />
                <MenuCard 
                  name="Focaccia" 
                  price="$3.50" 
                  image="https://images.unsplash.com/photo-1597079910443-60c43fc4f729?auto=format&fit=crop&q=80&w=200&h=200" 
                />
              </div>
            </section>
          )}

          {activeTab === 'Cakes' && (
            <section>
              <h2 className="font-heading text-3xl font-bold mb-8 text-coffee">Freshly Baked Cakes</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <MenuCard 
                  name="Chocolate Cake" 
                  price="$5.00" 
                  image="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=200&h=200" 
                />
                <MenuCard 
                  name="Vanilla Bean Cake" 
                  price="$4.75" 
                  image="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=200&h=200" 
                />
                <MenuCard 
                  name="Carrot Cake" 
                  price="$5.25" 
                  image="https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80&w=200&h=200" 
                />
                <MenuCard 
                  name="Red Velvet Cake" 
                  price="$5.50" 
                  image="https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&q=80&w=200&h=200" 
                />
                <MenuCard 
                  name="Lemon Poppyseed Cake" 
                  price="$4.50" 
                  image="https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=200&h=200" 
                />
                <MenuCard 
                  name="Cheesecake" 
                  price="$6.00" 
                  image="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=200&h=200" 
                />
              </div>
            </section>
          )}

          {activeTab === 'Coffee' && (
            <section>
              <h2 className="font-heading text-3xl font-bold mb-8 text-coffee">Artisan Coffee</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <MenuCard 
                  name="Latte" 
                  price="$3.50" 
                  image="https://lh3.googleusercontent.com/aida-public/AB6AXuAYRWUtDgZnO2np-FGcOLlFIKiESxRsMlVGr1wibRsGyzmcpg8u04X2QJHq5UB3IGY8e4DXX7iCF8JWraBtdFMfVYcP0b3c1uPJdGu6NODJkcRVdy1BdUMUNrcb9G0x46Rt9LIF9O_fPFg7QqYkE68GqxMSQGehj8PI7X4G65fAT9MbzQW-Bn_Q9v_eTompT69WOXcAQr0pTHER39uX92BcoRX7NEgpnITRZnOkylfuvonJAtHpBjCyRcRmGgCphyg8pcsq6RwPIqs" 
                />
                <MenuCard 
                  name="Cappuccino" 
                  price="$3.25" 
                  image="https://lh3.googleusercontent.com/aida-public/AB6AXuDElPpaznTAHp8S0t8vo-7uUoqD76qZE2yqX3hGxzQLWKXH7BND6gEc5DZVivigoQEVafvsjgGBphk64eNuU6ql1VL0KGnVYo9fM59557Q0ZFOjnFgxv-86p8AOAuQkuY7caX8qzh-Km-DW2yhHbnunXTCgZMetNPS2oE8-RYsUgYXTkOSei0uoed3mtPpgK6LYZXwIrpLRVxQQ8jxt-JQSRQIgNRENql5ynTNFMHMJ1L_aAMnd6OwDV1AB7hlmFy9LOnk6aTvgylc" 
                />
                <MenuCard 
                  name="Espresso" 
                  price="$2.75" 
                  image="https://lh3.googleusercontent.com/aida-public/AB6AXuDTCZzGWSdX2Z-Mq4RspgZzbG77yrwxdoM-ULb-FsvEbBL7fR1we7DJtJD0XnzGZqRx1EY1fBa35agy4dISUgvhmHRio6W3DVQUHbFPf13MgxYYhkR2CvE7Lp87KHCgxb_PzipXR8xi-vPVxuIfuK2mpKekpevE9fsBb4_U_1XEW9-68GwGz5D40iEENuOEbN-IX3lUChDyBIg2eI_mR--RoHS7n5enPhYWER-4tiIw1ZL3gUg4HJL0bcQZf-wpgnI62wlEt2Spf9g" 
                />
                <MenuCard 
                  name="Cold Brew" 
                  price="$4.00" 
                  image="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=200&h=200" 
                />
                <MenuCard 
                  name="Iced Latte" 
                  price="$4.25" 
                  image="https://images.unsplash.com/photo-1517701550927-30cf4ba1dba1?auto=format&fit=crop&q=80&w=200&h=200" 
                />
                <MenuCard 
                  name="Mocha" 
                  price="$4.50" 
                  image="https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=200&h=200" 
                />
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

function MenuCard({ name, price, image }: { name: string; price: string; image: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-coffee/5 hover-lift">
      <div className="w-16 h-16 rounded-xl overflow-hidden mb-4">
        <img src={image} alt={name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>
      <h3 className="font-heading text-lg font-bold text-coffee mb-1">{name}</h3>
      <p className="text-caramel font-medium">{price}</p>
    </div>
  );
}
