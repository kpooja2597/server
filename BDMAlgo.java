import java.awt.Container;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.*;


public class BDMAlgo extends JFrame implements ActionListener
{

	JButton jb;
	JTextField jtf;
	JLabel jl,jl1,jl2;
	String trnsTable[][]=new String[18][3];
	String accState,accpState[]=new String[4];
	int pos,n,m,j,last;
	String state;
	public BDMAlgo() 
	{
		drawgui();
		generateTable();
	}
	private void generateTable() {
		int k=0,i=0,j=0,l=0;
		while(i<18)
		{
			j=0;
			if(k==0)
			{
				trnsTable[i][j++]=String.valueOf(l);//Entering state in table
				trnsTable[i][j]="a";//input char
				k++;
			}else{
				trnsTable[i][j++]=String.valueOf(l++);//Entering state in table
				trnsTable[i][j]="b";//input char
				k=0;
			}
			i++;
		}
			//entering next state in table
			trnsTable[0][2]="1";
			trnsTable[1][2]="2";
			trnsTable[2][2]="4";
			trnsTable[3][2]="5";
			trnsTable[4][2]="3";
			trnsTable[5][2]="6";
			trnsTable[6][2]="4";
			trnsTable[7][2]="n";
			trnsTable[8][2]="n";
			trnsTable[9][2]="5";
			trnsTable[10][2]="n";
			trnsTable[11][2]="6";
			trnsTable[12][2]="7";
			trnsTable[13][2]="n";
			trnsTable[14][2]="8";
			trnsTable[15][2]="n";
			trnsTable[16][2]="n";
			trnsTable[17][2]="n";
			
			//entering accepting state in table
			accpState[0]="0";
			accpState[1]="1";
			accpState[2]="4";
			accpState[3]="8";
			
			/*trnsTable[0][3]="A";
			trnsTable[1][3]="A";
			trnsTable[2][3]="A";
			trnsTable[3][3]="A";
			trnsTable[4][3]=null;
			trnsTable[5][3]=null;
			trnsTable[6][3]=null;
			trnsTable[7][3]=null;
			trnsTable[8][3]="A";
			trnsTable[9][3]="A";
			trnsTable[10][3]=null;
			trnsTable[11][3]=null;
			trnsTable[12][3]=null;
			trnsTable[13][3]=null;
			trnsTable[14][3]=null;
			trnsTable[15][3]=null;
			trnsTable[16][3]="A";
			trnsTable[17][3]="A";*/
		for(i=0;i<18;i++)
		{	
			for(j=0;j<3;j++)
				System.out.print(trnsTable[i][j]+" ");
			System.out.println();
		}
		//System.out.println(" "+accState);
		
	}
	@Override
	public void actionPerformed(ActionEvent arg0) 
	{
		search();
			
	}
	private void search()
	{
		String T=jtf.getText();
		if(T.equals(""))
			JOptionPane.showMessageDialog(jtf, "Please enter Text");
		else
		{
			n=T.length();
			
			if(n<7)
				JOptionPane.showMessageDialog(jtf, "Please enter Text more than 7 character");
			else
			{
				char t[]=T.toCharArray();
				pos=0;m=7;
				while(pos<=n-m)
				{
					System.out.println("In 1 while");
					j=m-1;last=m-1;
					state=trnsTable[0][0];
					while(!state.equals("n"))
					{
						System.out.println("In 2 while");
						System.out.println(state);
						System.out.println("t[pos+j]="+(pos+j));
						System.out.println(t[pos+j]);
						state=nextState(state,t[pos+j]);
						j--;
						System.out.println("nextState="+state);
						if(isTerminal(state))
						{
							System.out.println("In 1 if");
							if(j>0)
							{
								System.out.println("In 2 if");
								last=j;
							}
							else
							{
								drawResult(pos+1);
								System.out.println("last="+last);
								break;
							}
						}
					}
					pos=pos+last;
				}
			}
		}
	}
	private boolean isTerminal(String st)
	{
		for (int i = 0; i < accpState.length; i++) {
			if(accpState[i].equals(st))
				return true;
		}
		return false;
	}
	private void drawResult(int i) 
	{
		if(i==1)
			jl.setText(jl.getText()+"-"+i);
		else
			jl.setText(jl.getText()+"-"+(i+1));
	}
	private String nextState(String state2, char c)
	{
		for (int i = 0; i < trnsTable.length; i++) {
			//System.out.println("inNxt():"+trnsTable[i][0]);
			//System.out.println("inNxt():"+trnsTable[i][1]);
			if(trnsTable[i][0].equals(state2))
			{
				System.out.println("nxt="+trnsTable[i][1].charAt(0));
				if(trnsTable[i][1].charAt(0)==c)
			{
				System.out.println("In next if");
				return trnsTable[i][2];
			}}
		}
		return "n";
		
	}
	private void drawgui() 
	{
		jl2=new JLabel("Pattern P:aabbaab");
		
		jl=new JLabel("Occurences ==>");
		jl1=new JLabel("Enter Text T==>");
		jb=new JButton("Submit");
		jtf=new JTextField(20);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		
		jb.setBounds(250, 140, 100, 40);
		jl2.setBounds(150, 20, 350, 25);
		jl1.setBounds(150, 50, 200, 30);
		jtf.setBounds(150, 100, 350, 30);
		jl.setBounds(10, 200, 250, 100);
		
		Container contentPane = getContentPane();
		contentPane.setLayout(null);
		//int v = ScrollPaneConstants.VERTICAL_SCROLLBAR_AS_NEEDED;
		//int h = ScrollPaneConstants.HORIZONTAL_SCROLLBAR_AS_NEEDED;
		contentPane.add(jb);
		contentPane.add(jl1);
		contentPane.add(jtf);
		contentPane.add(jl);
		contentPane.add(jl2);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		jb.addActionListener((ActionListener) this);
	}
	
	public static void main(String[] args) throws Exception 
	{
		BDMAlgo BDMAlg=new BDMAlgo();
		BDMAlg.setTitle("BDM Algorithm");
		BDMAlg.setVisible(true);
		BDMAlg.setSize(600, 500);
	}
}
