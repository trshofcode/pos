import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Inertia } from '@inertiajs/inertia';
import { useState } from 'react';

export default function AddressForm() {    
    
    const [prov, setProv] = useState('');    
    const [kab, setKab] = useState('');
    const [kec, setKec] = useState('');
    const [desa, setDesa] = useState('');
    const [postzip, setPost] = useState('');
    const [ket, setKet] = useState('');   

    const handleSubmit = () =>{
        const data = {
            prov, kab, kec, desa, ket, postzip
        }
        Inertia.post('/cart/alamat', data)        
    }      
            
    return(
        <section>
            <header>
                <h2 className="text-lg font-medium">Address</h2>            
            </header>            
                <div className="flex flex-col gap-2">                                
                <TextInput
                        id="prov"                        
                        value={prov}
                        onChange={(e) => setProv(e.target.value)}
                        required
                        autoComplete="provinsi"
                        placeholder="Provinsi"
                        className="mt-1 block w-full"                        
                    />                
                <TextInput
                        id="kab"                        
                        value={kab}
                        onChange={(e) => setKab(e.target.value)}
                        required
                        autoComplete="kabupaten"
                        placeholder="Kabupaten"
                        className="mt-1 block w-full"                        
                    />                
                <TextInput
                        id="kec"                        
                        value={kec}
                        onChange={(e) => setKec(e.target.value)}
                        required
                        autoComplete="kecamatan"
                        placeholder="Kecamatan"
                        className="mt-1 block w-full"                        
                    />                
                <TextInput
                        id="desa"                        
                        value={desa}
                        onChange={(e) => setDesa(e.target.value)}
                        required
                        autoComplete="desa"
                        placeholder="Desa"
                        className="mt-1 block w-full"                        
                    />                
                <TextInput
                        id="ket"                        
                        value={ket}
                        onChange={(e) => setKet(e.target.value)}
                        required
                        autoComplete="keterangan"
                        placeholder="Keterangan"
                        className="mt-1 block w-full"                        
                    />                
                <TextInput
                        id="post-zip"                        
                        value={postzip}
                        onChange={(e) => setPost(e.target.value)}
                        required
                        autoComplete="Kode Pos"                        
                        pattern='[0-9]*'
                        placeholder="Kode Pos"
                        className="mt-1 block w-full"                        
                    />                                
                <div className="modal-action">
                    <form method="dialog" className='flex gap-4'> 
                        <button onClick={handleSubmit} type='submit' className="btn items-center mt-2 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
                            Save</button>                    
                        <button className="btn items-center mt-2 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">Close</button>
                    </form>
                </div>
                </div>                         
        </section>
    );
}